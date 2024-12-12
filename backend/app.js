const express = require('express');
const app = express();
const recipesRoute = require('./routes/recipes');
const cors = require('cors')

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/recipes', recipesRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
