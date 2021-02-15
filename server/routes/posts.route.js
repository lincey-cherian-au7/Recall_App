const express = require('express');
const posts = require('../controllers/posts.controllers')
const router = express.Router();

router.get('/',posts.getPost)
router.post('/',posts.createPost)
module.exports= router;