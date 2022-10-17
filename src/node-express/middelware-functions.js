const middelfunc = (req, res, next)  => {
    console.log(req.url);
    next();
}

module.exports = {middelfunc};