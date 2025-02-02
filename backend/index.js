const express = require("express");
const apiRouter = require('./routes/index');
const cors = require('cors');

const app = express();
app.use('./api/v1' , apiRouter);
app.use(cors());
app.use(express.json());


app.listen(3000);


