module.exports = function (objectrepository) {
    return function (req, res, next) {
        return res.locals.szoba.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/szobak');
        });
    }
};
//deletes a given szoba from the database