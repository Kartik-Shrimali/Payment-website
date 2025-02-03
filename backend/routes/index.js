const express = require('express');
const Router = express.Router();
const UserRouter = require("./user");
const AccountRouter = require("./user");

Router.use("./users" , UserRouter);
Router.use("./accounts", AccountRouter);

module.exports = {
    Router
}