module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.cucc = {name : "Hajszarito", availability: true, place: 710, id:1};
        next();
    };
};
//fetches a given cucc from the database