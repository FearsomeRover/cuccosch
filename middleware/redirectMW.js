module.exports = function (objectrepository, path) {
    return function (req, res, next) {
        res.redirect(path);
    };
};
//redirecting the user to a given path