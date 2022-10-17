const express = require('express');
const path = require('path');
const {products, people} = require('./data');

const app = express();


app.get('/', (req, res) => {
    res.json([products]);
});


app.get('/api/product/:productID', (req, res) => {
    const pro = products.find((product) => {
        if (product.id === Number(req.params.productID))
        {
            return product;
        }
    });
    res.json(pro);
});

app.listen(2000, () => {
    console.log(`listning on port 2000....`);
});