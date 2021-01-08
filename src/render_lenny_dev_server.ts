
import renderLenny from "./render_lenny.ts"

import { serve } from "https://cdn.deno.land/std/versions/0.83.0/raw/http/server.ts";

const server = serve({ port: 3000 })
console.log(`Lenny sever running on http://localhost:3000`)

const lenny = renderLenny({ emotion: "suprise", mouth: "open" })

console.log(lenny)

for await (const req of server) {
    req.respond({
        body: `<!DOCTYPE html> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> ${lenny} <style>* {font-family: arial;font-size: 3rem; text-align: center;white-space:pre;}</style>`
    })
}