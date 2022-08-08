const express = require('express');
const cron = require('node-cron');
const sfscrapper = require("./sfscrapper");

const app = express()
const port = 3000

let trmSf = '';
let trmBanrep = '';
let trmBvc = '';

app.get('/getTrm', (req, res) => {
    switch (req.query.platform) {
        case "sf":
            res.send("Superfinanciera " + trmSf);
            break;
        case "banrep":
            res.send("Banco de la republica " + trmBanrep);
            break;
        case "bvc":
            res.send("Bolsa de valores de Colombia " + trmBvc);
        default:
            res.send('Not a supported platform');
            break;
    }
})

cron.schedule('0 0 * * *', async () => {
    trmSf = await sfscrapper();
})

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
}) 