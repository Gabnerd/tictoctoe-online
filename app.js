const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req,res)=>{
    res.send("<h1>Hello World</h1>");
});

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
});