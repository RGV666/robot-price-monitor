window.ROBOT_PRICE_DATA = {
  "snapshot": {
    "title": "Daily snapshot",
    "lastUpdated": "2026-07-16T19:19:04.530Z",
    "timezone": "Asia/Shanghai",
    "cadence": "Daily",
    "historyMode": "Seed history until observed daily snapshots accumulate. Rows without a public numeric price stay quote-only until an official store, marketplace API, or seller feed returns a price.",
    "sourcePolicy": "Use official manufacturer/store prices when public. Use approved marketplace APIs or seller feeds for Amazon, JD.com, eBay, AliExpress, and other retailers. Exclude user-blocked reseller catalogues from price sourcing."
  },
  "connectors": [
    {
      "name": "Official",
      "status": "configured",
      "method": "public manufacturer page, official store page, or official sales inquiry endpoint"
    },
    {
      "name": "Amazon",
      "status": "api-required",
      "method": "Product Advertising API or seller feed"
    },
    {
      "name": "JD.com",
      "status": "api-required",
      "method": "JD open platform or partner feed"
    },
    {
      "name": "eBay",
      "status": "api-required",
      "method": "Browse API"
    },
    {
      "name": "AliExpress",
      "status": "api-required",
      "method": "affiliate or seller feed"
    },
    {
      "name": "Other retailers",
      "status": "api-required",
      "method": "approved retailer API, distributor feed, or manually verified quote"
    }
  ],
  "products": [
    {
      "id": "unitree-r1",
      "brand": "Unitree",
      "model": "R1 / R1 AIR",
      "category": "Humanoid",
      "segment": "consumer research humanoid",
      "imageUrl": "https://www.unitree.com/images/eec8d82f279b440ea170982ffa80b3fa_3840x2160.jpg?x-oss-process=image%2Fquality%2Cq_60%2Fformat%2Cwebp",
      "productUrl": "https://www.unitree.com/R1/",
      "verifiedAt": "2026-07-05",
      "status": "Published price",
      "confidence": "official page",
      "dayChangePct": 0,
      "sevenDayChangePct": -16.9,
      "thirtyDayChangePct": -16.9,
      "historySeed": "down",
      "offers": [
        {
          "source": "Official",
          "price": 4900,
          "currency": "USD",
          "priceText": "$4,900",
          "availability": "Published price",
          "url": "https://www.unitree.com/R1/",
          "note": "R1 AIR, tax and shipping excluded"
        },
        {
          "source": "Official",
          "price": 5900,
          "currency": "USD",
          "priceText": "$5,900",
          "availability": "Published price",
          "url": "https://www.unitree.com/R1/",
          "note": "R1, tax and shipping excluded"
        },
        {
          "source": "AliExpress",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.aliexpress.com/",
          "note": "Use marketplace API or seller feed"
        }
      ]
    },
    {
      "id": "unitree-g1",
      "brand": "Unitree",
      "model": "G1",
      "category": "Humanoid",
      "segment": "humanoid development platform",
      "imageUrl": "https://www.unitree.com/images/a20ba1ebc0724df8a8135744dee8bbea_2740x1720.jpg",
      "productUrl": "https://www.unitree.com/g1/",
      "verifiedAt": "2026-07-05",
      "status": "Published price",
      "confidence": "official page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": -15.6,
      "historySeed": "down",
      "offers": [
        {
          "source": "Official",
          "price": 13500,
          "currency": "USD",
          "priceText": "$13,500",
          "availability": "Published price",
          "url": "https://www.unitree.com/g1/",
          "note": "Tax and shipping excluded"
        },
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.unitree.com/g1/",
          "note": "G1 EDU"
        },
        {
          "source": "Amazon",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.amazon.com/",
          "note": "Use PA-API, not page scraping"
        }
      ]
    },
    {
      "id": "unitree-go2",
      "brand": "Unitree",
      "model": "Go2",
      "category": "Quadruped",
      "segment": "consumer robot dog",
      "imageUrl": "https://www.unitree.com/images/b5fffd3e4fc04e6f9fcafedb9516b341_3840x2146.jpg",
      "productUrl": "https://www.unitree.com/go2/",
      "verifiedAt": "2026-07-05",
      "status": "Published price",
      "confidence": "official page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": 1600,
          "currency": "USD",
          "priceText": "$1,600",
          "availability": "Published price",
          "url": "https://www.unitree.com/go2/",
          "note": "Price from, tax and shipping excluded"
        },
        {
          "source": "Amazon",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.amazon.com/",
          "note": "Marketplace collector placeholder"
        },
        {
          "source": "eBay",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.ebay.com/",
          "note": "Browse API search by exact model"
        }
      ]
    },
    {
      "id": "one-x-neo",
      "brand": "1X",
      "model": "NEO",
      "category": "Humanoid",
      "segment": "home humanoid robot",
      "imageUrl": "",
      "productUrl": "https://www.1x.tech/order",
      "verifiedAt": "2026-07-05",
      "status": "US deliveries start 2026",
      "confidence": "official order page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": 499,
          "currency": "USD",
          "priceText": "$499/mo",
          "availability": "Subscription",
          "url": "https://www.1x.tech/order",
          "note": "Standard subscription"
        },
        {
          "source": "Official",
          "price": 20000,
          "currency": "USD",
          "priceText": "$20,000",
          "availability": "Ownership",
          "url": "https://www.1x.tech/order",
          "note": "Early Access ownership with 3-year warranty"
        },
        {
          "source": "Official",
          "price": 200,
          "currency": "USD",
          "priceText": "$200",
          "availability": "Deposit",
          "url": "https://www.1x.tech/order",
          "note": "Refundable deposit due today"
        }
      ]
    },
    {
      "id": "agibot-a2",
      "brand": "AGIBOT",
      "model": "A2 Ultra",
      "category": "Humanoid",
      "segment": "full-size humanoid robot",
      "imageUrl": "",
      "productUrl": "https://www.agibot.com/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official product listing",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.agibot.com/",
          "note": "Official site lists A2 Ultra, A2 Lite, and A2-W without public price"
        }
      ]
    },
    {
      "id": "agibot-d1",
      "brand": "AGIBOT",
      "model": "D1 Ultra",
      "category": "Quadruped",
      "segment": "quadruped intelligent robot",
      "imageUrl": "",
      "productUrl": "https://www.agibot.com/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official product listing",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.agibot.com/",
          "note": "Official AGIBOT D1 product family; price not public"
        }
      ]
    },
    {
      "id": "ubtech-walker-s2",
      "brand": "UBTECH",
      "model": "Walker S2",
      "category": "Humanoid",
      "segment": "industrial humanoid robot",
      "imageUrl": "",
      "productUrl": "https://www.ubtrobot.com/en/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official product listing",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.ubtrobot.com/en/",
          "note": "Official site lists Walker S2 under Industrial products"
        }
      ]
    },
    {
      "id": "casbot-huiling",
      "brand": "CASBOT",
      "model": "Hui Ling humanoid",
      "category": "Humanoid",
      "segment": "general-purpose humanoid",
      "imageUrl": "",
      "productUrl": "https://www.casbot.tech/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.casbot.tech/",
          "note": "Official CASBOT site describes general humanoid and embodied-intelligence deployment"
        }
      ]
    },
    {
      "id": "figure-03",
      "brand": "Figure",
      "model": "Figure 03",
      "category": "Humanoid",
      "segment": "home and general-purpose humanoid",
      "imageUrl": "",
      "productUrl": "https://www.figure.ai/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official product page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "No public price",
          "availability": "Not listed",
          "url": "https://www.figure.ai/",
          "note": "Official page presents Figure 03 but does not publish retail pricing"
        }
      ]
    },
    {
      "id": "boston-dynamics-spot",
      "brand": "Boston Dynamics",
      "model": "Spot",
      "category": "Quadruped",
      "segment": "industrial inspection robot",
      "imageUrl": "",
      "productUrl": "https://bostondynamics.com/products/spot/",
      "verifiedAt": "2026-07-05",
      "status": "Contact sales",
      "confidence": "official product page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://bostondynamics.com/products/spot/",
          "note": "Official Spot page routes buyers to Contact Sales"
        }
      ]
    },
    {
      "id": "agility-digit",
      "brand": "Agility",
      "model": "Digit",
      "category": "Humanoid",
      "segment": "warehouse humanoid automation",
      "imageUrl": "",
      "productUrl": "https://www.agilityrobotics.com/",
      "verifiedAt": "2026-07-05",
      "status": "Deploy Digit",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.agilityrobotics.com/",
          "note": "Official site positions Digit for deployment; no public retail price"
        }
      ]
    },
    {
      "id": "robotera-l7",
      "brand": "RobotEra",
      "model": "L7 / STAR1",
      "category": "Humanoid",
      "segment": "embodied-intelligence humanoid",
      "imageUrl": "",
      "productUrl": "https://www.robotera.com/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company site",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.robotera.com/",
          "note": "Model family seeded from local robot database; direct price still needs official sales confirmation"
        }
      ]
    },
    {
      "id": "tesla-optimus",
      "brand": "Tesla",
      "model": "Optimus",
      "category": "Humanoid",
      "segment": "general-purpose humanoid",
      "imageUrl": "",
      "productUrl": "https://www.tesla.com/AI",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "No public price",
          "availability": "Not listed",
          "url": "https://www.tesla.com/AI",
          "note": "Track only when Tesla publishes retail or order pricing"
        }
      ]
    },
    {
      "id": "apptronik-apollo",
      "brand": "Apptronik",
      "model": "Apollo",
      "category": "Humanoid",
      "segment": "industrial humanoid",
      "imageUrl": "",
      "productUrl": "https://apptronik.com/apollo",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official product page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://apptronik.com/apollo",
          "note": "Official product page; price not public"
        }
      ]
    },
    {
      "id": "sanctuary-phoenix",
      "brand": "Sanctuary AI",
      "model": "Phoenix",
      "category": "Humanoid",
      "segment": "general-purpose humanoid",
      "imageUrl": "",
      "productUrl": "https://www.sanctuary.ai/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.sanctuary.ai/",
          "note": "Track when official price or sales terms are public"
        }
      ]
    },
    {
      "id": "fourier-gr3",
      "brand": "Fourier",
      "model": "GR-3",
      "category": "Humanoid",
      "segment": "care humanoid",
      "imageUrl": "",
      "productUrl": "https://www.fftai.com/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.fftai.com/",
          "note": "Only official quote source retained; no third-party catalogue price used"
        }
      ]
    },
    {
      "id": "limx-oli",
      "brand": "LimX Dynamics",
      "model": "OLI",
      "category": "Humanoid",
      "segment": "bipedal humanoid",
      "imageUrl": "",
      "productUrl": "https://www.limxdynamics.com/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.limxdynamics.com/",
          "note": "Only official quote source retained; no third-party catalogue price used"
        }
      ]
    },
    {
      "id": "deep-robotics-x30",
      "brand": "Deep Robotics",
      "model": "X30",
      "category": "Quadruped",
      "segment": "industrial quadruped",
      "imageUrl": "",
      "productUrl": "https://www.deeprobotics.cn/en/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.deeprobotics.cn/en/",
          "note": "Track official and marketplace listings when available"
        }
      ]
    },
    {
      "id": "anybotics-anymal",
      "brand": "ANYbotics",
      "model": "ANYmal",
      "category": "Quadruped",
      "segment": "industrial inspection quadruped",
      "imageUrl": "",
      "productUrl": "https://www.anybotics.com/",
      "verifiedAt": "2026-07-05",
      "status": "No public retail price",
      "confidence": "official company page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Contact sales",
          "availability": "Quote",
          "url": "https://www.anybotics.com/",
          "note": "Track official quote or distributor feed"
        }
      ]
    },
    {
      "id": "loona-petbot",
      "brand": "KEYi",
      "model": "Loona Petbot Premium",
      "category": "Companion",
      "segment": "AI pet companion",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0750/4170/2077/files/gallery-loona-petbot-premium-1-v2.webp?crop=center&height=500&v=1780474015&width=500",
      "productUrl": "https://keyirobot.com/en-us/products/petbot",
      "verifiedAt": "2026-07-05",
      "status": "Published price",
      "confidence": "official store",
      "dayChangePct": -5.7,
      "sevenDayChangePct": -5.7,
      "thirtyDayChangePct": -5.7,
      "historySeed": "down",
      "offers": [
        {
          "source": "Official",
          "price": 499,
          "currency": "USD",
          "priceText": "$499",
          "availability": "Published price",
          "url": "https://keyirobot.com/en-us/products/petbot",
          "note": "Sale price; regular listed at $529"
        },
        {
          "source": "Amazon",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.amazon.com/",
          "note": "Marketplace collector placeholder"
        }
      ]
    },
    {
      "id": "livingai-emo",
      "brand": "LivingAI",
      "model": "EMO",
      "category": "Companion",
      "segment": "desktop AI pet",
      "imageUrl": "https://i0.wp.com/living.ai/wp-content/uploads/2025/04/2026010606.jpg?fit=600%2C600&quality=89&ssl=1",
      "productUrl": "https://living.ai/product/emo/",
      "verifiedAt": "2026-07-05",
      "status": "Published price",
      "confidence": "official store",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": 279,
          "currency": "USD",
          "priceText": "$279",
          "availability": "Add to cart",
          "url": "https://living.ai/product/emo/",
          "note": "EMO package"
        },
        {
          "source": "Official",
          "price": 369,
          "currency": "USD",
          "priceText": "$369",
          "availability": "Related product",
          "url": "https://living.ai/product/emo/",
          "note": "EMO GO HOME"
        }
      ]
    },
    {
      "id": "miko-3",
      "brand": "Miko",
      "model": "Miko 3",
      "category": "Companion",
      "segment": "educational companion robot",
      "imageUrl": "https://miko.ai/cdn/shop/files/miko-red_1_88c13e0f-d894-4ab1-a7a9-d85d83f6ddad.png?v=1763631213&width=416",
      "productUrl": "https://miko.ai/products/miko-3",
      "verifiedAt": "2026-07-05",
      "status": "Published price",
      "confidence": "official store",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": 299,
          "currency": "USD",
          "priceText": "$299",
          "availability": "Published price",
          "url": "https://miko.ai/products/miko-3",
          "note": "Official page also links retailers"
        },
        {
          "source": "Amazon",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.amazon.com/",
          "note": "Retailer link listed by Miko; price needs API fetch"
        }
      ]
    },
    {
      "id": "sony-aibo",
      "brand": "Sony",
      "model": "Aibo",
      "category": "Companion",
      "segment": "robot dog companion",
      "imageUrl": "",
      "productUrl": "https://aibo.sony.jp/en/",
      "verifiedAt": "2026-07-05",
      "status": "Regional availability varies",
      "confidence": "official product page",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Official",
          "price": null,
          "currency": "USD",
          "priceText": "Regional",
          "availability": "Check official store",
          "url": "https://aibo.sony.jp/en/",
          "note": "Track official regional store price when available"
        },
        {
          "source": "eBay",
          "price": null,
          "currency": "USD",
          "priceText": "API required",
          "availability": "Connector pending",
          "url": "https://www.ebay.com/",
          "note": "Used and collector listings require condition filtering"
        }
      ]
    },
    {
      "id": "hightorque-minipi",
      "brand": "Hi Torque Robotics",
      "model": "Mini Pi+",
      "category": "Companion",
      "segment": "education and companion robot",
      "imageUrl": "",
      "productUrl": "https://www.hightorquerobotics.com/",
      "verifiedAt": "2026-06-03",
      "status": "Vault contact record",
      "confidence": "vault database",
      "dayChangePct": 0,
      "sevenDayChangePct": 0,
      "thirtyDayChangePct": 0,
      "historySeed": "flat",
      "offers": [
        {
          "source": "Vault DB",
          "price": 5500,
          "currency": "USD",
          "priceText": "$5,500",
          "availability": "Lead time 2-3 weeks",
          "url": "https://www.hightorquerobotics.com/",
          "note": "From ROBOT DATABASE_MASTER.xlsx"
        }
      ]
    }
  ],
  "coverageQueue": [
    "1X",
    "AGIBOT",
    "Agility",
    "ANYbotics",
    "Apptronik",
    "Boston Dynamics",
    "CASBOT",
    "Deep Robotics",
    "Figure",
    "Fourier",
    "Hi Torque Robotics",
    "KEYi",
    "LimX Dynamics",
    "LivingAI",
    "Miko",
    "RobotEra",
    "Sanctuary AI",
    "Sony",
    "Tesla",
    "UBTECH",
    "Unitree",
    "XPeng",
    "Engine AI",
    "Booster Robotics",
    "Noetix",
    "PND Botics",
    "Galbot",
    "Kepler Robots",
    "Hanson Robotics",
    "Enchanted Tools",
    "PAL Robotics",
    "Amazon",
    "JD.com",
    "eBay",
    "AliExpress",
    "RobotShop"
  ]
};
