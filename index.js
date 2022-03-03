
const persoangens = require('./dados');
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.json({persoangens})

});
app.listen(8080,() => {
    console.log('Servidor rodando');
})