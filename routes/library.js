const express = require('express');
const path = require('path');
const rootDir = require('../helper/path-helper');


const router = express.Router();


router.get('/',(req, res, next) => {
    console.log('Root');
    res.sendFile(path.join(rootDir, 'views', 'library.html'));
})

module.exports = router;