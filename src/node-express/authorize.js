const authorize = (req, res, next) => {
    console.log(`checking....`);
    const {user} = req.query;
    if (user === 'mohamed')
    {
        req.user = {user: user, id: 4}
        next();
    } else {
        res.status(401).send(`you are not allowed here!!`);
    }
    console.log(`middelware end`);
};

module.exports = {authorize};