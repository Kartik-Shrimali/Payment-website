const express = require('express');
const Router = express.Router();

const UserRouter = require("./user");
Router.use("./users" , UserRouter);

module.exports = {
    Router
}