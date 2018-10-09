// Define your routes
import express from 'express';
const router = express.Router();

// Routes go here.
router.get('/', () => {
	console.log('Root Handler!');
});

// Use localhost:9000/api followed by the required path.

module.exports = router;