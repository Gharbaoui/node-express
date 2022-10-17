const getAllAnimals = (req, res) => {
    console.log(`animals rout`);
    res.send(`animals`);
};

const getOneAnimal =  (req, res) => {
    console.log(`one animal`);
    res.send(`lion`);
};

module.exports = {getAllAnimals, getOneAnimal};