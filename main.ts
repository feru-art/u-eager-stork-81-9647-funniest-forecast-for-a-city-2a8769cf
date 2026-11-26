import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const forecastLine =
  "Wind warning for Bellbridge: gusts will ring the town bell backward, so noon may arrive before breakfast.";

const outputDirectory = "/output";
const outputFile = join(outputDirectory, "entry.txt");

function assertForecastShape(text: string): void {
  const characterCount = [...text].length;
  const hasVisibleText = text.trim().length > 0;
  const hasLineBreak = text.includes("\n") || text.includes("\r");

  if (!hasVisibleText || hasLineBreak || characterCount < 1 || characterCount > 120) {
    throw new Error("forecast must be one visible line of 1 to 120 characters");
  }
}

assertForecastShape(forecastLine);
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, forecastLine, "utf8");
