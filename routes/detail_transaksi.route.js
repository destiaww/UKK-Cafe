const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());

const detail_transaksiController = require("../controllers/detail_transaksi.controller");
const auth = require("../auth/auth");

app.get("/",auth.authVerify, detail_transaksiController.getAllDetail)
app.post("/add",auth.authVerify, detail_transaksiController.addDetail)
app.post("/find",auth.authVerify, detail_transaksiController.findDetail)
app.put("/:id",auth.authVerify, detail_transaksiController.updateDetail)
app.delete("/:id",auth.authVerify, detail_transaksiController.deleteDetail)
module.exports = app