// src/routes/chatRoutes.js
const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

// POST /api/chat - Send a message to OpenAI and get a response
router.post('/', chatController.sendMessage);

module.exports = router;