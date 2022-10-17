const express = require('express');
const path = require('path');
const {products, people} = require('./data');
const {middelfunc} = require('./middelware-functions');
const {authorize} = require(`./authorize`);
const { application } = require('express');

const app = express();
/*
app.use(`/api`, middelfunc); // this will work with any url that matchs /api

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

app.use([middelfunc, authorize]);


app.get('/md/home', (req, res) => {
    res.send(`middleware home`);
});

app.get('/md/about', (req, res) => {
    res.send('middleware about');
});

app.get('/md/stream', (req, res) => {
    res.send(`you are in the stream section`);
});

*/


app.get('/api/v1/users/', (req, res) => {
    console.log(`users rout`);
    res.send(`USERS`);
});

app.get('/api/v1/users/:userID', (req, res) => {
    console.log(`one user`);
    res.send(`mohamed`);
});



app.get('/api/v1/animals/', (req, res) => {
    console.log(`animals rout`);
    res.send(`animals`);
});

app.get('/api/v1/animals/:animalID', (req, res) => {
    console.log(`one animal`);
    res.send(`lion`);
});


app.listen(2000, () => {
    console.log(`listning on port 2000....`);
});