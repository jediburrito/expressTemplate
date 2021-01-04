const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.send('We are on default')
});


router.post('/route', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});


module.exports = router;