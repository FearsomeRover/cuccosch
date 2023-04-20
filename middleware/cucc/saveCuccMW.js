module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
//adds/modifies a cucc to the database