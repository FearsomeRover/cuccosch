module.exports = function (objectrepository) {
    return function (req, res, next) {
        return objectrepository.cuccModel.find().populate('_place').exec({}, (err, cuccok)=>{
            if(err){
                return next(err);
            }
            res.locals.cuccok = cuccok;
            return next();
        })
    };
};
//fetches the list of cuccok from the database