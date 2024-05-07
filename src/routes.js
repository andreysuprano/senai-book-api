const express = require('express');
const {
    getBooks, 
    getBook, 
    postBook
} = require('./controller/bookController');

const router = express.Router();

router.get('/books', getBooks);
router.get('/book/:bookId', getBook);
router.post('/book', postBook);

module.exports = router;