const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());

const transaksiController = require("../controllers/transaksi.controller");
const auth = require("../auth/auth");

app.get("/",auth.authVerify, transaksiController.getAllTransaksi)
app.post("/add",auth.authVerify, transaksiController.addTransaksi)
app.post("/find",auth.authVerify, transaksiController.findTransaksi)
app.put("/:id",auth.authVerify, transaksiController.updateTransaksi)
app.delete("/:id",auth.authVerify, transaksiController.deleteTransaksi)
module.exports = app