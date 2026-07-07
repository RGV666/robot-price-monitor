# Robot Price Monitor

Static dashboard for tracking retail prices of humanoid robots, quadruped robots, and companion robots.

## Open

Open `index.html` in a browser. It does not need a build step.

## Deploy on Render

This repo includes a root `render.yaml` Blueprint for deploying this dashboard as a Render static site.

Use these settings if creating the service manually in Render:

```text
Name: robot-price-monitor
Branch: main
Root Directory: 09_DASHBOARDS/robot-price-monitor
Build Command: echo "No build needed"
Publish Directory: .
```

If this dashboard folder is copied into its own standalone GitHub repo, leave Root Directory blank and keep Publish Directory as `.`.

## What is included

- Product table with robot image, brand, model, category, best price, source, and market-style movement.
- Detail panel with source-by-source price breakdown and a price history chart.
- Seed data from verified official manufacturer pages and official stores where available, with quote-only rows when public retail prices are not listed.
- Placeholder connectors for Amazon, JD.com, eBay, and AliExpress so future daily updates can use approved APIs or seller feeds.

## Important limitation

This is a working website, not a live scraper yet. The current `data.js` file is a seed snapshot. Daily production mode should replace or append to `data.js` from a scheduled job that uses:

- Official manufacturer or retailer product pages where permitted.
- Amazon Product Advertising API or seller feeds.
- eBay Browse API.
- JD.com open platform, partner feed, or manually approved source.
- AliExpress affiliate or seller feeds.

Robotist.com.au is explicitly excluded from price sourcing for this dashboard.

Avoid brittle marketplace HTML scraping unless the site terms, robots.txt, and rate limits allow it.

## Data model

Each product has:

- `brand`, `model`, `category`, `segment`
- `imageUrl`, `productUrl`
- `verifiedAt`, `status`, `confidence`
- `dayChangePct`, `sevenDayChangePct`, `thirtyDayChangePct`
- `offers[]` with source, price, currency, price text, availability, URL, and note

When daily snapshots are available, replace the seed movement fields with calculations from observed price history.
