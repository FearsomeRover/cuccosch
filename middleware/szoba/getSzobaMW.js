module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.szoba = {tag : "710", cuccok: ["Hajszárító"], lakok: ["Pistike", "Józsika", "Máté"], id:2314};
        next();
    };
};
//fetches a given szoba from the database