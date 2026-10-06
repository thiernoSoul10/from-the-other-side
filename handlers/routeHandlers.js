import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import { sanitizeInput } from "../utils/sanitize.js";

// handleGet
export async function handleGet(res){
    const data = await getData()
    const statusCode = data.length === 0 ? 500 : 200
    const dataString = JSON.stringify(data)

    return sendResponse(res, statusCode, dataString, 'application/json')
}


// handlePost
export async function handlePost(req, res) {

    try {
        const parsedBody = await parseJSONBody(req)
        // We sanitize the input first
        const sanitised = sanitizeInput(parsedBody)
        await addNewSighting(sanitised)
        sendResponse(res, 201, JSON.stringify(parsedBody), 'application/json')
    } catch (err) {
        sendResponse(res, 400, JSON.stringify({ error: err}), 'application/json')
    }
}