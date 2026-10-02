export function sendResponse(res, statusCode, content, contentType){
    res.setHeader('Content-Type', contentType)
    res.statusCode = statusCode
    res.end(content)
}