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

app.get('/api/v1/pages/:pageID', (req, res) => {
    console.log(req.params);
    console.log(req.query);
});

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let productsThatMatch = [];
    const arr_len = products.length;
    let max = arr_len;
    let counter = 0;
    if (limit)
        max = Number(limit);

    if (search)
    {
        for (let i = 0; i < arr_len && counter < max; ++i) {
            if (products[i].name.startsWith(search)){
                productsThatMatch.push(products[i]);
                ++counter;
            }
        }
    }
    res.json(productsThatMatch);
});

// middelware are functions that are excuted duaring the request to the server
// each middelware has access to req and res objects


const middelfunc = (req, res, next)  => {
    console.log(req.url);
    next();
}

app.get('/md/home', middelfunc, (req, res) => {
    res.send(`middleware home`);
});

app.get('/md/about', middelfunc,(req, res) => {
    res.send('middleware about');
});

app.listen(2000, () => {
    console.log(`listning on port 2000....`);
});