import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

// handleGet
export async function handleGet(res){
    const data = await getData()
    const statusCode = data.length === 0 ? 500 : 200
    const dataString = JSON.stringify(data)

    return sendResponse(res, statusCode, dataString, 'application/json')
}


// handlePost