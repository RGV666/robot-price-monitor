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

const output = `window.ROBOT_PRICE_DATA = ${JSON.stringify(data, null, 2)};\n`;

await writeFile(dataPath, output, "utf8");

console.log(`Updated robot price snapshot timestamp: ${now}`);
