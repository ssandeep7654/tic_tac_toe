const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle all requests and send them to index.html in build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Use the port from Heroku or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
