import { readFile, writeFile } from "node:fs/promises";
const sources = [
  {
    productId: "example-examplebot",
    offerSource: "Official",
    url: "https://humanoid.guide/",
    currency: "USD",
    priceRegex: /\$([0-9,]+(?:\.[0-9]{2})?)/
  }
];
const dataPath = new URL("../data.js", import.meta.url);
const sourceText = await readFile(dataPath, "utf8");

const match = sourceText.match(/window\.ROBOT_PRICE_DATA\s*=\s*([\s\S]*?);?\s*$/);

if (!match) {
  throw new Error("Could not find window.ROBOT_PRICE_DATA in data.js");
}

const data = Function(`"use strict"; return (${match[1]});`)();

const now = new Date().toISOString();

data.snapshot.lastUpdated = now;
for (const source of sources) {
  const response = await fetch(source.url, {
    headers: {
      "user-agent": "robot-price-monitor/1.0"
    }
  });

  if (!response.ok) {
    console.log(`Could not fetch ${source.url}: ${response.status}`);
    continue;
  }

  const html = await response.text();
  const match = html.match(source.priceRegex);

  if (!match) {
    console.log(`No price found for ${source.productId}`);
    continue;
  }

  const price = Number(match[1].replace(/,/g, ""));
  const product = data.products.find((item) => item.id === source.productId);

  if (!product) {
    console.log(`Product not found: ${source.productId}`);
    continue;
  }

  const offer = product.offers.find((item) => item.source === source.offerSource);

  if (!offer) {
    console.log(`Offer not found for ${source.productId}: ${source.offerSource}`);
    continue;
  }

  offer.price = price;
  offer.priceText = `$${price.toLocaleString()}`;
  offer.availability = "Published price";
  offer.url = source.url;
  product.verifiedAt = new Date().toISOString().slice(0, 10);

  console.log(`Updated ${product.brand} ${product.model}: ${offer.priceText}`);
}

const output = `window.ROBOT_PRICE_DATA = ${JSON.stringify(data, null, 2)};\n`;

await writeFile(dataPath, output, "utf8");

console.log(`Updated robot price snapshot timestamp: ${now}`);
