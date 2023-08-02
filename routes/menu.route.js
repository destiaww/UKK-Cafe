const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());

const menuController = require("../controllers/menu.controller");
const auth = require("../auth/auth");

app.get("/",auth.authVerify, menuController.getAllMenu)
app.post("/add",auth.authVerify, menuController.addMenu)
app.get("/:id", menuController.findMenubyId);
app.post("/find",auth.authVerify, menuController.findMenu)
app.put("/:id",auth.authVerify, menuController.updateMenu)
app.delete("/:id",auth.authVerify, menuController.deleteMenu)
module.exports = app