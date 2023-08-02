const express = require("express")
const app = express()
var bodyParser = require('body-parser')
const PORT = 9000
const cors = require(`cors`)
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const userroute = require(`./routes/user.route`)
const menuRoute = require(`./routes/menu.route`)
const transaksiRoute = require(`./routes/transaksi.route`)
const mejaRoute = require(`./routes/meja.route`)
const detail_transaksiRoute = require(`./routes/detail_transaksi.route`)

app.use("/user", userroute)
app.use("/menu", menuRoute)
app.use("/meja", mejaRoute)
app.use("/transaksi", transaksiRoute)
app.use("/detail_transaksi", detail_transaksiRoute)


app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`kasirnya pake url localhst${PORT} yaa!`)
})