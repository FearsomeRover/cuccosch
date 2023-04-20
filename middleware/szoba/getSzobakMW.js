module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.szobak = [
            {tag : "710", cuccok: ["Hajszárító"], lakok: ["Pistike", "Józsika", "Máté"], id:2314},
            {tag : "801", cuccok: ["Hosszabbitó", "Töltő"], lakok: ["Jancsika", "Zsuzsi", "Erzsi", "Ádám"], id:178213},
            {tag : "123", cuccok: [], lakok: ["Én"], id:9876},
        ]
        next();
    };
};
//fetches the list of members from the database