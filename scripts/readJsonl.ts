import * as fs from "fs";
import * as readline from "readline";

export async function* readJsonlFile<T = any>(
  filePath: string
): AsyncGenerator<any, void, undefined> {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    try {
      yield JSON.parse(line) as T;
    } catch (err) {
      console.error(`Error parsing JSON line: ${line}`);
    }
  }
}
