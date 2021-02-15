const express = require('express');
const app = express();

let bands = [
    {"id" : "1", "name": "Megadeth", "country": "U.S.A"},
    {"id" : "2", "name": "Lacuna Coil", "country": "Italy"},
    {"id" : "3", "name": "Within Temptation", "country": "Holland"},
    {"id" : "4", "name": "Pentagram", "country": "Türkiye"},
    {"id" : "5", "name": "Opeth", "country": "Sweden"},
    {"id" : "6", "name": "Children Of Bodom", "country": "Finland"},
    {"id" : "7", "name": "Scorpions", "country": "Germany"},
    {"id" : "8", "name": "Dimmu Borgir", "country": "Norway"},
    {"id" : "9", "name": "Black Sabbath", "country": "U.K"},
    {"id" : "10", "name": "Nickelback", "country": "Canada"}
]

app.get("/Product", (req,res) =>{
    res.json(bands);
})

app.get("/Product/:id", (req,res) => {
    let productid = req.params.id - 1;
    // res.send(`${productid} numaralı grubun bilgileri;` + productid);
    res.send(bands[productid]);
});

app.listen(3001);