(function () {
  const data = window.ROBOT_PRICE_DATA;
  const state = {
    search: "",
    categories: new Set(["All"]),
    sources: new Set(["All"]),
    brands: new Set(["All"]),
    movement: "all",
    sort: "movement",
    selectedId: data.products[0]?.id,
    watchlist: new Set(["unitree-r1", "unitree-g1", "loona-petbot"]),
    chartWindow: 30
  };

  const elements = {
    snapshotLabel: document.getElementById("snapshotLabel"),
    coverageCount: document.getElementById("coverageCount"),
    watchlistCount: document.getElementById("watchlistCount"),
    resetButton: document.getElementById("resetButton"),
    sideSearch: document.getElementById("sideSearch"),
    mainSearch: document.getElementById("mainSearch"),
    categoryFilters: document.getElementById("categoryFilters"),
    sourceFilters: document.getElementById("sourceFilters"),
    brandFilters: document.getElementById("brandFilters"),
    sortSelect: document.getElementById("sortSelect"),
    robotRows: document.getElementById("robotRows"),
    rowCount: document.getElementById("rowCount"),
    snapshotTime: document.getElementById("snapshotTime"),
    verifiedOffers: document.getElementById("verifiedOffers"),
    connectorCount: document.getElementById("connectorCount"),
    largestMove: document.getElementById("largestMove"),
    quoteCount: document.getElementById("quoteCount"),
    seedModeButton: document.getElementById("seedModeButton"),
    detailCategory: document.getElementById("detailCategory"),
    detailTitle: document.getElementById("detailTitle"),
    detailImage: document.getElementById("detailImage"),
    detailFallback: document.getElementById("detailFallback"),
    detailBrand: document.getElementById("detailBrand"),
    detailPrice: document.getElementById("detailPrice"),
    detailSource: document.getElementById("detailSource"),
    detailStatus: document.getElementById("detailStatus"),
    detailConfidence: document.getElementById("detailConfidence"),
    offerRows: document.getElementById("offerRows"),
    historyChart: document.getElementById("historyChart"),
    historyNote: document.getElementById("historyNote"),
    watchButton: document.getElementById("watchButton")
  };

  function bestOffer(product) {
    return product.offers.find((offer) => typeof offer.price === "number") || product.offers[0];
  }

  function formatDateTime(value) {
    const date = new Date(value);
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short"
    }).format(date);
  }

  function filterValues(key) {
    const values = new Map();
    data.products.forEach((product) => {
      const value = key === "source" ? bestOffer(product).source : product[key];
      values.set(value, (values.get(value) || 0) + 1);
    });
    return [...values.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }

  function renderFilter(container, label, values, selectedSet) {
    const rows = [["All", data.products.length], ...values].map(([value, count]) => {
      const id = `${label}-${value}`.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
      return `
        <label class="check-row" for="${id}">
          <input id="${id}" type="checkbox" value="${value}" ${selectedSet.has(value) ? "checked" : ""}>
          <span>${value}</span>
          <span class="count">${count}</span>
        </label>
      `;
    });
    container.innerHTML = rows.join("");
    container.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => {
        updateSelectionSet(selectedSet, input.value, input.checked);
        render();
      });
    });
  }

  function updateSelectionSet(set, value, checked) {
    if (value === "All") {
      set.clear();
      set.add("All");
      return;
    }
    if (checked) {
      set.delete("All");
      set.add(value);
    } else {
      set.delete(value);
      if (!set.size) set.add("All");
    }
  }

  function passSet(set, value) {
    return set.has("All") || set.has(value);
  }

  function passMovement(product) {
    if (state.movement === "all") return true;
    if (state.movement === "up") return product.dayChangePct > 0;
    if (state.movement === "down") return product.dayChangePct < 0;
    return true;
  }

  function filteredProducts() {
    const query = state.search.trim().toLowerCase();
    const result = data.products.filter((product) => {
      const offer = bestOffer(product);
      const haystack = [product.brand, product.model, product.category, product.segment, offer.source]
        .join(" ")
        .toLowerCase();
      return (
        (!query || haystack.includes(query)) &&
        passSet(state.categories, product.category) &&
        passSet(state.sources, offer.source) &&
        passSet(state.brands, product.brand) &&
        passMovement(product)
      );
    });

    result.sort((a, b) => {
      if (state.sort === "price") {
        return (bestOffer(a).price ?? Number.MAX_SAFE_INTEGER) - (bestOffer(b).price ?? Number.MAX_SAFE_INTEGER);
      }
      if (state.sort === "brand") {
        return `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`);
      }
      if (state.sort === "updated") {
        return b.verifiedAt.localeCompare(a.verifiedAt);
      }
      return Math.abs(b.thirtyDayChangePct) - Math.abs(a.thirtyDayChangePct);
    });
    return result;
  }

  function trendSeries(product, length = 30) {
    const offer = bestOffer(product);
    if (typeof offer.price !== "number") {
      return Array.from({ length }, (_, index) => ({ x: index, y: 0 }));
    }
    const current = offer.price;
    const move = product.thirtyDayChangePct || 0;
    const start = current / (1 + move / 100 || 1);
    const seed = Array.from(product.id).reduce((total, char) => total + char.charCodeAt(0), 0);
    return Array.from({ length }, (_, index) => {
      const t = length === 1 ? 1 : index / (length - 1);
      const wave = Math.sin((index + seed) * 0.73) * 0.008 + Math.cos((index + seed) * 0.31) * 0.006;
      const base = start + (current - start) * t;
      const y = index === length - 1 ? current : Math.max(0, base * (1 + wave));
      return { x: index, y };
    });
  }

  function sparklineSvg(product) {
    const points = trendSeries(product, 24).map((point) => point.y);
    const width = 112;
    const height = 38;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const spread = max - min || 1;
    const path = points
      .map((value, index) => {
        const x = (index / (points.length - 1)) * width;
        const y = height - ((value - min) / spread) * (height - 6) - 3;
        return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
    const color = product.thirtyDayChangePct < 0 ? "#d92d20" : product.thirtyDayChangePct > 0 ? "#078a58" : "#0b6bff";
    return `<svg class="sparkline" viewBox="0 0 ${width} ${height}" aria-hidden="true"><path d="${path}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/></svg>`;
  }

  function moveClass(value) {
    if (value > 0.05) return "up";
    if (value < -0.05) return "down";
    return "flat";
  }

  function moveMarkup(value) {
    return `<span class="move ${moveClass(value)}">${Math.abs(value).toFixed(1)}%</span>`;
  }

  function initials(product) {
    const source = `${product.brand} ${product.model}`.replace(/[^a-z0-9 ]/gi, "").trim();
    return source
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  function renderRows(products) {
    if (!products.length) {
      elements.robotRows.innerHTML = `<div class="empty-state">No robots match the current filters.</div>`;
      return;
    }

    elements.robotRows.innerHTML = products
      .map((product) => {
        const offer = bestOffer(product);
        const selected = product.id === state.selectedId ? "active" : "";
        const price = offer?.priceText || "Quote";
        return `
          <button class="robot-row table-grid ${selected}" data-id="${product.id}" type="button">
            <span class="robot-thumb">
              ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.brand} ${product.model}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">` : ""}
              <span class="image-fallback" ${product.imageUrl ? "hidden" : ""}>${initials(product)}</span>
            </span>
            <span class="brand-cell">${product.brand}<span class="subline">${product.segment}</span></span>
            <span class="model-cell">${product.model}<span class="subline">${product.status}</span></span>
            <span class="category-cell"><span class="category-pill ${product.category.toLowerCase()}">${product.category}</span></span>
            <span class="price-cell">${price}</span>
            <span class="source-cell">${offer.source}<span class="subline">${product.confidence}</span></span>
            <span class="move-cell">${moveMarkup(product.dayChangePct)}</span>
            <span class="move-cell">${moveMarkup(product.sevenDayChangePct)}</span>
            <span class="spark-cell">${sparklineSvg(product)}</span>
          </button>
        `;
      })
      .join("");

    elements.robotRows.querySelectorAll(".robot-row").forEach((row) => {
      row.addEventListener("click", () => {
        state.selectedId = row.dataset.id;
        render();
      });
    });
  }

  function drawHistoryChart(product) {
    const canvas = elements.historyChart;
    const context = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const width = rect.width;
    const height = rect.height;
    context.clearRect(0, 0, width, height);

    const series = trendSeries(product, state.chartWindow).map((point) => point.y);
    if (!series.some(Boolean)) {
      context.fillStyle = "#667085";
      context.font = "12px Inter, system-ui, sans-serif";
      context.fillText("No numeric price history yet.", 18, 32);
      return;
    }

    const min = Math.min(...series);
    const max = Math.max(...series);
    const spread = max - min || 1;
    const pad = { top: 16, right: 16, bottom: 28, left: 54 };
    const chartW = width - pad.left - pad.right;
    const chartH = height - pad.top - pad.bottom;

    context.strokeStyle = "#e5ebf3";
    context.lineWidth = 1;
    context.fillStyle = "#667085";
    context.font = "11px Inter, system-ui, sans-serif";
    context.textBaseline = "middle";

    for (let i = 0; i < 4; i += 1) {
      const y = pad.top + (chartH / 3) * i;
      const labelValue = max - (spread / 3) * i;
      context.beginPath();
      context.moveTo(pad.left, y);
      context.lineTo(width - pad.right, y);
      context.stroke();
      context.fillText(shortMoney(labelValue, bestOffer(product).currency), 4, y);
    }

    const coords = series.map((value, index) => ({
      x: pad.left + (index / (series.length - 1)) * chartW,
      y: pad.top + chartH - ((value - min) / spread) * chartH
    }));

    const gradient = context.createLinearGradient(0, pad.top, 0, height - pad.bottom);
    gradient.addColorStop(0, "rgba(11, 107, 255, 0.18)");
    gradient.addColorStop(1, "rgba(11, 107, 255, 0.00)");

    context.beginPath();
    coords.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.lineTo(coords[coords.length - 1].x, height - pad.bottom);
    context.lineTo(coords[0].x, height - pad.bottom);
    context.closePath();
    context.fillStyle = gradient;
    context.fill();

    context.beginPath();
    coords.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.strokeStyle = product.thirtyDayChangePct < 0 ? "#d92d20" : "#0b6bff";
    context.lineWidth = 2;
    context.stroke();

    const last = coords[coords.length - 1];
    context.beginPath();
    context.arc(last.x, last.y, 4, 0, Math.PI * 2);
    context.fillStyle = context.strokeStyle;
    context.fill();
  }

  function shortMoney(value, currency) {
    if (!Number.isFinite(value)) return "-";
    if (value >= 1000000) return `${currency} ${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${currency} ${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}K`;
    return `${currency} ${Math.round(value)}`;
  }

  function renderDetail() {
    const product = data.products.find((item) => item.id === state.selectedId) || data.products[0];
    if (!product) return;
    const offer = bestOffer(product);
    elements.detailCategory.textContent = product.category;
    elements.detailTitle.textContent = `${product.brand} ${product.model}`;
    elements.detailBrand.textContent = product.brand;
    elements.detailPrice.textContent = offer?.priceText || "Quote";
    elements.detailSource.textContent = offer?.source || "-";
    elements.detailStatus.textContent = product.status;
    elements.detailConfidence.textContent = product.confidence;
    elements.historyNote.textContent = data.snapshot.historyMode;

    elements.detailImage.hidden = !product.imageUrl;
    elements.detailFallback.hidden = !!product.imageUrl;
    elements.detailFallback.textContent = initials(product);
    if (product.imageUrl) {
      elements.detailImage.src = product.imageUrl;
      elements.detailImage.alt = `${product.brand} ${product.model}`;
      elements.detailImage.onerror = () => {
        elements.detailImage.hidden = true;
        elements.detailFallback.hidden = false;
      };
    }

    elements.offerRows.innerHTML = product.offers
      .map((item) => {
        const availability = (item.availability || "").toLowerCase();
        const stockClass = availability.includes("pending")
          ? "pending"
          : availability.includes("quote") || availability.includes("inquire")
          ? "quote"
          : availability.includes("unavailable")
          ? "unavailable"
          : "in-stock";
        return `
          <div class="offer-row">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.source}</a>
            <span class="offer-price">${item.priceText}</span>
            <span class="stock ${stockClass}">${item.availability}</span>
          </div>
        `;
      })
      .join("");

    elements.watchButton.classList.toggle("active", state.watchlist.has(product.id));
    drawHistoryChart(product);
  }

  function renderSummary(products) {
    const verifiedOffers = data.products.flatMap((product) => product.offers).filter((offer) => typeof offer.price === "number").length;
    const pendingQuotes = data.products.filter((product) => product.offers.some((offer) => typeof offer.price !== "number")).length;
    const largest = data.products.reduce((max, product) => Math.abs(product.thirtyDayChangePct) > Math.abs(max) ? product.thirtyDayChangePct : max, 0);
    elements.coverageCount.textContent = `${data.products.length} models`;
    elements.watchlistCount.textContent = state.watchlist.size.toString();
    elements.verifiedOffers.textContent = verifiedOffers.toString();
    elements.connectorCount.textContent = data.connectors.length.toString();
    elements.quoteCount.textContent = pendingQuotes.toString();
    elements.largestMove.textContent = `${largest > 0 ? "+" : ""}${largest.toFixed(1)}%`;
    elements.rowCount.textContent = `${products.length} of ${data.products.length} models`;
    elements.snapshotTime.textContent = `Last updated ${formatDateTime(data.snapshot.lastUpdated)}`;
    elements.snapshotLabel.textContent = `${data.snapshot.title} - ${formatDateTime(data.snapshot.lastUpdated)}`;
  }

  function render() {
    renderFilter(elements.categoryFilters, "category", filterValues("category"), state.categories);
    renderFilter(elements.sourceFilters, "source", filterValues("source"), state.sources);
    renderFilter(elements.brandFilters, "brand", filterValues("brand"), state.brands);

    const products = filteredProducts();
    if (!products.some((product) => product.id === state.selectedId) && products[0]) {
      state.selectedId = products[0].id;
    }
    renderRows(products);
    renderSummary(products);
    renderDetail();
  }

  function syncSearch(value) {
    state.search = value;
    elements.sideSearch.value = value;
    elements.mainSearch.value = value;
    render();
  }

  elements.sideSearch.addEventListener("input", (event) => syncSearch(event.target.value));
  elements.mainSearch.addEventListener("input", (event) => syncSearch(event.target.value));
  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });
  document.querySelectorAll(".range-chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".range-chip").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.movement = button.dataset.move;
      render();
    });
  });
  document.querySelectorAll(".segment-control button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment-control button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.chartWindow = Number(button.dataset.window);
      renderDetail();
    });
  });
  elements.resetButton.addEventListener("click", () => {
    state.search = "";
    state.categories = new Set(["All"]);
    state.sources = new Set(["All"]);
    state.brands = new Set(["All"]);
    state.movement = "all";
    state.sort = "movement";
    elements.sortSelect.value = "movement";
    document.querySelectorAll(".range-chip").forEach((item) => item.classList.toggle("active", item.dataset.move === "all"));
    syncSearch("");
  });
  elements.seedModeButton.addEventListener("click", () => {
    alert(`${data.snapshot.historyMode}\n\nDaily production mode should replace data.js with observed snapshots from approved source connectors.`);
  });
  elements.watchButton.addEventListener("click", () => {
    const id = state.selectedId;
    if (state.watchlist.has(id)) state.watchlist.delete(id);
    else state.watchlist.add(id);
    render();
  });
  window.addEventListener("resize", () => renderDetail());

  render();
})();
