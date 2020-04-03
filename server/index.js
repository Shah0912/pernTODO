const express = require('express');
const cors = require('cors');
const app = express();

//middle ware
app.use(cors());
app.use(express.json());


app.listen(5000,()=>{
    console.log('Server started...');
});