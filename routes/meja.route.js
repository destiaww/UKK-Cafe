const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());

const mejaController = require("../controllers/meja.controller");
const auth = require("../auth/auth");

app.get("/", auth.authVerify, mejaController.getAllMeja)
app.post("/add", auth.authVerify, mejaController.addMeja)

app.post("/find",auth.authVerify, mejaController.findMeja)
app.put("/:id",auth.authVerify, mejaController.updateMeja)
app.delete("/:id",auth.authVerify, mejaController.deleteMeja)
module.exports = app