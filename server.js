import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { handleGet, handlePost } from "./handlers/routeHandlers.js"


const PORT = 8000

const __dirname = import.meta.dirname

console.log(__dirname)

const server = http.createServer(async (req, res) => {

    if(req.url === '/api'){
        if(req.method === 'GET'){
            // GET request
            return await handleGet(res)
        } else {
            // POST request
            return await handlePost(req, res)
        }
    } else if(!req.url.startsWith('/api')){
        return await serveStatic(req, res, __dirname)
    }

})

server.listen(PORT, () => console.log("linstening to the port: " + PORT))