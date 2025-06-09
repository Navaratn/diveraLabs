const Router = require('./routers/router')
const connectDB = require('./DB/connect')
const express = require('express')
const bodyParser = require('body-parser')
const controller = require("./controllers/controller")
require("dotenv").config();
const { loadNuxt, build } = require('nuxt')
var https = require('https');
var fs = require("fs");
const http = require('http');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

async function main() {

    const isDev = false
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    // Render every route with Nuxt.js
    app.use(nuxt.render)

    // Build only in dev mode with hot-reloading
    if (isDev) {
        build(nuxt)
    }

    const httpsOptions = { 
        //path to key 
        key: fs.readFileSync("./certificates/server.key"),
        //path to crt 
        cert: fs.readFileSync("./certificates/server.crt")
    }

    var server = https.createServer(httpsOptions, (app))

    // server.listen({ port: process.env.PORT || 3000, host: process.env.ADRESS || "0.0.0.0" }, (err) => {
    //     if (err) {
    //         server.log.error(err);
    //         process.exit(1);
    //     }
    // });

    try {
        await connectDB(process.env.MONGO_URI)
        // Start listening.
        server.listen( process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT} ..`)
        })
        console.log("connected to data base")
    } catch (error) {
        console.log(error)
    }
}

main()
// Loading routes
app.use('/contact', Router);

const httpServer = http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers.host + req.url });
  res.end();
});
httpServer.listen(80);
