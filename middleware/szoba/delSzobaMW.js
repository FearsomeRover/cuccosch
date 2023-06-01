module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.cuccok.forEach(function(cucc){
            if(cucc._place._id.toString() === req.params.szobaid){
                return res.redirect('/szobak');
            }
        })
        return res.locals.szoba.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/szobak');
        });
    }
};
//deletes a given szoba from the database