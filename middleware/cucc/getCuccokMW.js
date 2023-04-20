module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.cuccok = [
            {name : "Hajszárító", availability: true, place: 710, id:1},
            {name : "Elosztó", availability: false, place: 801, id:2},
            {name : "haloo", availability: true, place: 123, id:3},
            {name : "asdasdasdas", availability: true, place: 672378,id:123123},
        ]
        next();
    };
};
//fetches the list of cuccok from the database