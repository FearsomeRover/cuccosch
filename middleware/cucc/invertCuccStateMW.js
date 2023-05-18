module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.cucc.elerheto = !res.locals.cucc.elerheto;
        return res.locals.cucc.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    };
};