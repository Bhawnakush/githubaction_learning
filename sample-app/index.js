// Simple Express app for the course labs
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from DevSecOps Lab!', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Intentionally vulnerable endpoint for security scanning labs
// DO NOT use this pattern in production!
app.get('/user', (req, res) => {
  const userId = req.query.id;
  // This is an example of what security scanners catch
  res.send(`<h1>User: ${userId}</h1>`); // XSS vulnerability!
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
