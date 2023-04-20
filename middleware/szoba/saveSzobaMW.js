module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
//adds/modifies a szoba to the database