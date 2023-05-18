module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.place === 'undefined'
        ) {
            return res.redirect('/');
        }
        if(typeof res.locals.cucc === 'undefined'){
            res.locals.cucc = new objectrepository.cuccModel();
        }
        res.locals.cucc.name = req.body.name;
        res.locals.cucc.elerheto = true;
        res.locals.cucc._place = req.body.place;
        return res.locals.cucc.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    };
};
//adds/modifies a cucc to the database