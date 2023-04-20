module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
//deletes a given szoba from the database