//mw-k

const renderMW = require("../middleware/renderMW")
const delCuccMW = require("../middleware/cucc/delCucc")
const getCuccokMW = require("../middleware/cucc/getCuccokMW")
const getCuccMW = require("../middleware/cucc/getCuccMW")
const invertCuccStateMW = require("../middleware/cucc/invertCuccStateMW")
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
    app.get("/cuccok/state/:cuccid",
        getCuccMW(objRepo),
        invertCuccStateMW(objRepo),
    )
    app.get("/newCucc",
        getSzobakMW(objRepo),
        renderMW(objRepo, 'ujcucc', 'cuccok')
    )
    app.post("/newCucc",
        saveCuccMW(objRepo)
    )

    app.get("/cuccok/edit/:cuccid",
        getCuccMW(objRepo),
        getSzobakMW(objRepo),
        renderMW(objRepo, "editcucc", 'cuccok'),
    )
    app.post("/cuccok/edit/:cuccid",
        getCuccMW(objRepo),
        saveCuccMW(objRepo)
    )
    app.get("/cuccok/delete/:cuccid",
        getCuccMW(objRepo),
        delCuccMW(objRepo)
    )
    app.get("/szobak",
        getSzobakMW(objRepo),
        renderMW(objRepo, "szobak", 'szobak')
    )
    app.get("/szobak/new",
        renderMW(objRepo, "ujszoba", 'szobak')
    )
    app.post("/szobak/new",
        saveSzobaMW(objRepo),
    )
    app.get("/szobak/edit/:szobaid",
        getSzobaMW(objRepo),
        renderMW(objRepo, "editszoba", 'szobak')
    )
    app.post("/szobak/edit/:szobaid",
        getSzobaMW(objRepo),
        saveSzobaMW(objRepo)
    )
    app.get("/szobak/delete/:szobaid",
        getSzobaMW(objRepo),
        getCuccokMW(objRepo),
        delSzobaMW(objRepo)
    )
    app.get("/",
        getCuccokMW(objRepo),
        renderMW(objRepo, 'cuccok', 'cuccok')
    )
}