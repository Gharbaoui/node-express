const animalsRouter = require('express').Router();
const {getAllAnimals, getOneAnimal} = require('../controllers/animals');

animalsRouter.get('/', getAllAnimals);

animalsRouter.get('/:animalID', getOneAnimal);

module.exports = {animalsRouter};