module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log(req.session);
        if(typeof req.session.admin === 'undefined' || req.session.admin === false){
            console.log('nologin');
            return res.redirect("/");
        }

        next();
    };
};
//authenticating the user, and checking if that page is visible for them