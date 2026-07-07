---
type: output
status: seed
created: 2026-07-05
updated: 2026-07-05
source_count: 24
tags:
  - output/robotics
  - output/dashboard
aliases:
  - Robot Price Monitor
---

# Robot Price Monitor

## Purpose

Track retail prices for [[02_ROBOTS/index|robotics companies and brands]] across humanoid robots, quadruped robots, and companion robots. The dashboard should show product image, brand, model, category, best price, source, and visible price movement.

## Current artifact

- [Robot Price Monitor dashboard](index.html)
- [Dashboard visual concept](assets/concept-dashboard.png)
- [Seed data](data.js)

## Seed source notes

- Unitree official product pages are used for R1, G1, and Go2 seed prices.
- Robotist.com.au is excluded from this dashboard's price sourcing by user instruction.
- 1X, AGIBOT, UBTECH, CASBOT, Figure, Boston Dynamics, Agility Robotics, RobotEra, Tesla, Apptronik, Sanctuary AI, Fourier, LimX, Deep Robotics, ANYbotics, and Sony are represented from official pages or quote-only placeholders when public prices are not listed.
- KEYi, LivingAI, and Miko official stores are used for companion robot seed prices.
- `01 Sources/Assets/ROBOT DATABASE_MASTER.xlsx` contributed the Hi Torque Mini Pi+ seed row and the broader coverage queue.

## Daily monitoring plan

1. Store product targets and source URLs in a source registry.
2. Fetch official prices from allowed product pages or official store APIs.
3. Fetch Amazon, JD.com, eBay, and AliExpress prices through approved APIs, partner feeds, or seller exports.
4. Normalize each offer into `{ product_id, source, seller, currency, price, availability, checked_at, url }`.
5. Append each daily offer to a snapshot store.
6. Recalculate best price, 24h movement, 7d movement, and 30d movement.
7. Rebuild `data.js` for the static dashboard or serve the same shape from an API.

## Connector notes

| Source | Preferred method | Notes |
|---|---|---|
| Official company pages | Public page or official store API | Respect robots.txt, rate limits, and page terms. |
| Amazon | Product Advertising API or seller feed | Avoid direct HTML scraping. |
| JD.com | JD open platform or partner feed | Needs direct marketplace verification for Chinese listings. |
| eBay | Browse API | Search by exact brand/model and filter condition/location. |
| AliExpress | Affiliate/seller feed | Useful for Unitree marketplace listings if approved. |
| Other retailers | Approved retailer API, distributor feed, or manually verified quote | Do not use blocked reseller catalogue pages as price sources. |

## Sources

- [Unitree R1](https://www.unitree.com/R1/)
- [Unitree G1](https://www.unitree.com/g1/)
- [Unitree Go2](https://www.unitree.com/go2/)
- [1X NEO order page](https://www.1x.tech/order)
- [AGIBOT official site](https://www.agibot.com/)
- [UBTECH official site](https://www.ubtrobot.com/en/)
- [CASBOT official site](https://www.casbot.tech/)
- [Figure official site](https://www.figure.ai/)
- [Boston Dynamics Spot](https://bostondynamics.com/products/spot/)
- [Agility Robotics](https://www.agilityrobotics.com/)
- [RobotEra official site](https://www.robotera.com/)
- [Tesla AI](https://www.tesla.com/AI)
- [Apptronik Apollo](https://apptronik.com/apollo)
- [Sanctuary AI](https://www.sanctuary.ai/)
- [Fourier official site](https://www.fftai.com/)
- [LimX Dynamics](https://www.limxdynamics.com/)
- [Deep Robotics](https://www.deeprobotics.cn/en/)
- [ANYbotics](https://www.anybotics.com/)
- [KEYi Loona Petbot](https://keyirobot.com/en-us/products/petbot)
- [LivingAI EMO](https://living.ai/product/emo/)
- [Miko 3](https://miko.ai/products/miko-3)
- [Sony Aibo](https://aibo.sony.jp/en/)
- [Hi Torque Robotics](https://www.hightorquerobotics.com/)
- `01 Sources/Assets/ROBOT DATABASE_MASTER.xlsx`
