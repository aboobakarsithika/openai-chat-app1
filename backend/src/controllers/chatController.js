// src/controllers/chatController.js
const { OpenAI } = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Send a message to OpenAI API and get a response
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ],
      max_tokens: 500,
    });

    // Extract the assistant's response
    const aiResponse = completion.choices[0].message.content;

    // Return the response
    res.status(200).json({
      message: aiResponse,
      usage: completion.usage,
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Handle specific OpenAI API errors
    if (error.response) {
      return res.status(error.response.status).json({
        error: 'OpenAI API Error',
        message: error.response.data.error.message,
      });
    }
    
    next(error);
  }
};