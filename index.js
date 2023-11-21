const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const useranme= tasnim
const pass = BdnKjrhS4xBhkKqI
app.get('/',(req,res)=>{
    res.send("I am getting");
})
app.listen(port, ()=>{
    console.log(`I am listing at port ${port}`)
})