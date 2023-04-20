module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
//authenticating the user, and checking if that page is visible for them