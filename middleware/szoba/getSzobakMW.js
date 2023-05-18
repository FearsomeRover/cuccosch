module.exports = function (objectrepository) {
    return function (req, res, next) {
        return objectrepository.szobaModel.find().populate('_items').exec({}, (err, results)=>{
            if(err){
                return next(err);
            }
            res.locals.szobak = results;
            return next();
        })
    };
};
//fetches the list of members from the database