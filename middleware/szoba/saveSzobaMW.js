module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (
            typeof req.body.szobaszam === 'undefined'
        ) {
            return res.redirect('/');
        }
        if(typeof res.locals.szoba === 'undefined'){
            res.locals.szoba = new objectrepository.szobaModel();
        }
        res.locals.szoba.szobaszam = req.body.szobaszam;
        res.locals.szoba.lakok = [req.body.lako1,req.body.lako2,req.body.lako3,req.body.lako4]
        return res.locals.szoba.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/szobak');
        });
    };
};
//adds/modifies a szoba to the database