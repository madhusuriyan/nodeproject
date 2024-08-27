// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route to serve the welcome page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f4f9;
        }
        .welcome-container {
          text-align: center;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="welcome-container">
        <h1>Welcome to My Website!</h1>
        <p>We're glad to have you here. Feel free to explore and enjoy.</p>
      </div>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
