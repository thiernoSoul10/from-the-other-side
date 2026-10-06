import { getData } from "./getData.js";
import fs from "node:fs/promises"
import path from "node:path";

export async function addNewSighting(parsedBody){
    try {

        // 1. Getting the existing data
        const data = await getData()
        // 2. Pushing the new sighting to it
        data.push(parsedBody)
        // 3. Righting data to the file
        const dataPath = path.join("data", "data.json");
        await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8')
        // 4. Adding the new sighting (done on the front end)
    } catch (error) {
        // 5. Throwing an error
        throw new Error(`Error: ${error}`)
    }
}