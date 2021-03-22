const express = require('express');

const router = express.Router();

// app: [GET, / ] 
router.get('/', (req, res) => {
    res.render('index', {title: '웹 자판기'});
});

module.exports = router;