const getAllUsers = (req, res) => {
    console.log(`users rout`);
    res.send(`USERS`);
};

const getOneUser = (req, res) => {
    console.log(`one user`);
    res.send(`mohamed`);
};

module.exports = {getAllUsers, getOneUser};