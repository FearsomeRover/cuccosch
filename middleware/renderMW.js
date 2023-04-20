module.exports = function (objectrepository, name, tab) {
    return function (req, res, next) {
        res.locals.tab = tab;
        res.render(name, res.locals);
    };
};
//sending back the requested pages html