module.exports = function (objectrepository) {
    return function (req, res, next) {
        return res.locals.cucc.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    };
};
//deletes a res.locals.cucc from the database