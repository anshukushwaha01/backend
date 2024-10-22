// require('dotenv').config()
const http =require('http');
const https = require('https');
const express = require('express');
const{connectDB} = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/users');
const bodyParser = require('body-parser');
// const PORT = process.env.PORT;
const port = process.env.PORT || 4000;

const app = express()
const corsOptions = {
    // origin: 'http://localhost:3000', // Change this to your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204 // For legacy browser support
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.urlencoded({extended:true}))

connectDB();

 app.use('/api',userRoutes);

app.listen(5040,()=>{
    console.log('Start server')
})