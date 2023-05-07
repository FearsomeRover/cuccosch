module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body.name === 'undefined' || typeof req.body.password === 'undefined'){
            res.redirect('/');
        }
        if(req.body.name === 'admin' && req.body.password === 'admin'){
            req.session.admin = true;
            //return next();
            // req.session.save(error => {
            //     if(error){
            //         next(error);
            //     }
            //     next();
            // })
        }
        res.redirect('/');
    };
};