const express = require("express");
const app = express();
const port = 3333;

const routes = require("./routes");

app.set("view engine", "ejs");
app.use(routes);

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
});