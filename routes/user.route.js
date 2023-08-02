const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(express.json());

const userController = require("../controllers/user.controller");
const auth = require("../auth/auth");

app.post("/login", userController.login);
app.get("/", auth.authVerify, userController.getAllUser);
app.post("/find", auth.authVerify, userController.findUser);
app.get("/:id", userController.findUserbyId);
app.post("/add", auth.authVerify, userController.addUser);
app.delete("/:id", auth.authVerify, userController.deleteUser);
app.put("/:id", auth.authVerify, userController.updateUser);

module.exports = app;
