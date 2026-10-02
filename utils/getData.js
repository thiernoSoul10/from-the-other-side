import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

export async function getData() {
    try {
        const dataPath = path.join("data", "data.json");
        const data = await fs.readFile(dataPath, "utf8");

        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        return [];
    }
}
