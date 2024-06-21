const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();

// Read files using fs module
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Access command line arguments
console.log(process.argv);

// Access environment variables
console.log(process.env.NODE_ENV);

// Create a small HTTP server
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
}).listen(3000, () => console.log('Server running on http://localhost:3000/'));

// Create a small Express server
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => console.log('Express server running on http://localhost:3000/'));

// Advanced routes with Express
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Use ES6 with Babel-node
import { sayHello } from './utils';

sayHello('John');

// Use Nodemon for faster development
// Install Nodemon globally: npm install -g nodemon
// Run with: nodemon app.js

// README.md
# Node.js Basic

This repository contains examples of using Node.js for various tasks, including:

- Reading files
- Accessing command line arguments and environment variables
- Creating a small HTTP server
- Creating a small Express server
- Advanced routing with Express
- Using ES6 with Babel-node
- Using Nodemon for faster development
