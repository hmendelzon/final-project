const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const router = require("./routes/api")



const connectionParams = {
    // newUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(`error conection${err}`);
    })


app.use(cors());

app.use(bodyParser.json());

app.use('/', router); 

app.listen(process.env.PORT, () => console.log("listenning"));


