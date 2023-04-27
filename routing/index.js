//mw-k

const authMW = require("../middleware/authMW")
const renderMW = require("../middleware/renderMW")
const delCuccMW = require("../middleware/cucc/delCucc")
const getCuccokMW = require("../middleware/cucc/getCuccokMW")
const getCuccMW = require("../middleware/cucc/getCuccMW")
const saveCuccMW = require("../middleware/cucc/saveCuccMW")
const delSzobaMW = require("../middleware/szoba/delSzobaMW")
const getSzobakMW = require("../middleware/szoba/getSzobakMW")
const getSzobaMW = require("../middleware/szoba/getSzobaMW")
const saveSzobaMW = require("../middleware/szoba/saveSzobaMW")

const cuccModel = require("../models/cucc")
const szobaModel = require("../models/szoba")

module.exports = function (app){
    const objRepo = {
        cuccModel:cuccModel,
        szobaModel: szobaModel,
    };

    app.get("/newCucc",
        authMW(objRepo),
        renderMW(objRepo, 'ujcucc', 'cuccok')
    )
    app.post("/newCucc",
        authMW(objRepo),
        saveCuccMW(objRepo)
    )

    app.get("/cuccok/edit/:cuccid",
        authMW(objRepo),
        getCuccMW(objRepo),
        renderMW(objRepo, "editcucc", 'cuccok'),
    )
    app.post("/cuccok/edit/:cuccid",
        authMW(objRepo),
        getCuccMW(objRepo),
        //(req, res, next)=>{console.log(req); next();},
        saveCuccMW(objRepo)
    )
    app.get("/cuccok/delete/:cuccid",
        authMW(objRepo),
        getCuccMW(objRepo),
        delCuccMW(objRepo)
    )
    app.get("/szobak",
        getSzobakMW(objRepo),
        renderMW(objRepo, "szobak", 'szobak')
    )
    app.get("/szobak/new",
        authMW(objRepo),
        renderMW(objRepo, "ujszoba", 'szobak')
    )
    app.post("/szobak/new",
        authMW(objRepo),
        saveSzobaMW(objRepo),
    )
    app.get("/szobak/edit/:szobaid",
        authMW(objRepo),
        getSzobaMW(objRepo),
        //(req, res, next)=>{console.log(res.locals.szoba); next();},
        renderMW(objRepo, "editszoba", 'szobak')
    )
    app.post("/szobak/edit/:szobaid",
        authMW(objRepo),
        getSzobaMW(objRepo),
        saveSzobaMW(objRepo)
    )
    app.get("/szobak/delete/:szobaid",
        authMW(objRepo),
        getSzobaMW(objRepo),
        delSzobaMW(objRepo)
    )

    app.get("/login",
        renderMW(objRepo, "login", 'cuccok'),
    )
    app.post("/login",
        authMW(objRepo)
    )
    app.get("/",
        getCuccokMW(objRepo),
        renderMW(objRepo, 'cuccok', 'cuccok')
    )
}