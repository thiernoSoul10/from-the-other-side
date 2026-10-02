import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"

const PORT = 8000

const __dirname = import.meta.dirname

console.log(__dirname)

const server = http.createServer(async (req, res) => {

    await serveStatic(req, res, __dirname)

})

server.listen(PORT, () => console.log("linstening to the port: " + PORT))