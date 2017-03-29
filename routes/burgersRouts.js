var express = require("express");
var router = express.Router();
var db = require("../models/");

router.get("/", function(req, res) {



    res.redirect('/allBurgers');

});

router.get("/allBurgers", function(req, res) {

    db.Burger.findAll().then(function(data) {
        // console.log(data);
        var ObjData = { burger: data }
        return res.render("index", ObjData);
    });
});

router.post('/burger/create', function(req, res) {
    // req.body.name


    setTimeout(() => {
        db.Burger.create({
            burgerName: req.body.name
        }).then(function(data) {
            res.redirect('/allBurgers');
        })
    }, 3000)


});

router.put("/burgers/eat", function(req, res) {

    console.log(req.body.eatten)

    setTimeout(() => {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.body.eatten
            }
        }).then(function(data) {
            res.redirect('/allBurgers');
        })
    }, 3000)

})

router.delete("/burgers/destroy", function(req, res) {

    setTimeout(() => {
        db.Burger.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(data) {
            res.redirect('/allBurgers');
        })
    }, 4000)


})


module.exports = router;