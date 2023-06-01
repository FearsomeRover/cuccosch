module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof(req.params.szobaid) === 'undefined'){
            return res.redirect('/');
        }
        return objectrepository.szobaModel.findOne({
            _id: req.params.szobaid }, (err, result) => {
            if (err) {
                return next(err);
            }
            if(!result){
                res.redirect('/');
            }

            res.locals.szoba = result;
            return next();
        });
    };
};
//fetches a given szoba from the database