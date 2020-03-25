const express = require('express');
const path = require('path');
const rootDir = require('../helper/path-helper');

const router = express.Router();


// /admin/add-book
router.get('/add-book',(req, res, next) => {
    console.log('Root rajout livre');
    res.sendFile(path.join(rootDir, 'views', 'add-book.html'));
})

// /admin/books
router.post('/books',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;