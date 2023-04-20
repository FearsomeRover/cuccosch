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
const redirectMW = require("../middleware/redirectMW")


module.exports = function (app){
    const objRepo = {};

    app.get("/newCucc",
        authMW(objRepo),
        saveCuccMW(objRepo),
        renderMW(objRepo, 'ujcucc', 'cuccok')
    )

    app.get("/cuccok/edit/:cuccid",
        authMW(objRepo),
        getCuccMW(objRepo),
        saveCuccMW(objRepo),
        renderMW(objRepo, "editcucc", 'cuccok'),

    )
    app.get("/cuccok/delete/:cuccid",
        delCuccMW(objRepo),
        redirectMW(objRepo, "/", 'cuccok')

    )
    app.get("/szobak",
        getSzobakMW(objRepo),
        renderMW(objRepo, "szobak", 'szobak')
    )
    app.get("/szobak/new",
        authMW(objRepo),
        saveSzobaMW(objRepo),
        renderMW(objRepo, "ujszoba", 'szobak')
    )
    app.get("/szobak/edit/:szobaid",
        authMW(objRepo),
        getSzobaMW(objRepo),
        saveSzobaMW(objRepo),
        renderMW(objRepo, "editszoba", 'szobak')
    )
    app.get("/szobak/delete/:szobaid",
        delSzobaMW(objRepo),
        redirectMW(objRepo, "/szobak")
)

    app.get("/login",
        authMW(objRepo),
        renderMW(objRepo, "login", 'cuccok'),
    )
    app.get("/",
        getCuccokMW(objRepo),
        renderMW(objRepo, 'cuccok', 'cuccok')
    )

}