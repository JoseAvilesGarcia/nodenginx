'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/app1/', function (req, res) {
    if (!req.session.usuario) {
        res.redirect('/app1/users');

    } else {

        res.render('index', { title: 'Express' });

    }


    
});

module.exports = router;
