const usersRouter = require('express').Router();

usersRouter.get('/', (req, res) => {
    console.log(`users rout`);
    res.send(`USERS`);
});

usersRouter.get('/:userID', (req, res) => {
    console.log(`one user`);
    res.send(`mohamed`);
});


module.exports = {usersRouter};