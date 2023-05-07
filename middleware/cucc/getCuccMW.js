module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(req.params.cuccid === 'undefined'){
            return res.redirect('/');
        }
        return objectrepository.cuccModel.findOne({
            _id: req.params.cuccid }, (err, result) => {
            if (err || !result) {
                return next(err);
            }

            res.locals.cucc = result;
            return next();
        });
    };
};
//fetches a given cucc from the database and puts it on res.locals.cucc if it doesnt find it, redirects to "/"