/*
Challenge 2:

1. Create and export a function called 'serveStatic'. 
   It should take in the base directory as a parameter.

2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
   (Which node module will you need to import to do this? Which method joins the path together?)

3. Log 'filePath' to the console.
*/

import path from 'node:path'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'
import fs from "node:fs/promises"


export async function serveStatic(req, res, baseDir) {

  const publicDir = path.join(baseDir, 'public')
  const filePath = path.join(publicDir, 
   req.url === '/' ? 'index.html': req.url)
  
  try {
      const ext = path.extname(filePath)

      const content = await fs.readFile(filePath)

      sendResponse(res, 200, content, getContentType(ext))  
   } catch (error) {
      let content
      let statusCode = 500
      switch(error.code){
         case 'ENOENT':
            content = await fs.readFile(
               path.join(publicDir, '404.html')
            )
            statusCode = 500
            break
         default:
            `content = <html><h1>Server Error ${error.code}</h1></html>`
            break
      }

      sendResponse(res, statusCode, content, getContentType(''))  
   }
}
