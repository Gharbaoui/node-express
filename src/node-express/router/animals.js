const animalsRouter = require('express').Router();

animalsRouter.get('/', (req, res) => {
    console.log(`animals rout`);
    res.send(`animals`);
});

animalsRouter.get('/:animalID', (req, res) => {
    console.log(`one animal`);
    res.send(`lion`);
});

module.exports = {animalsRouter};