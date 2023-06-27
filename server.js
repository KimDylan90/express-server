const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

// GET /uuid
app.get('/uuid', (req, res) => {
  const newUUID = uuidv4();
  res.send(newUUID);
});

// GET /user-agent
app.get('/user-agent', (req, res) => {
  const userAgent = req.get('User-Agent');
  res.send(userAgent);
});

// GET /headers
app.get('/headers', (req, res) => {
  res.json(req.headers);
});

// GET /url
app.get('/url', (req, res) => {
  const requestedUrl = req.originalUrl;
  res.send(requestedUrl);
});

// GET /json
app.get('/json', (req, res) => {
  const jsonData = {
    person: {
      name: 'John',
      age: 30
    }
  };
  res.json(jsonData);
});

// GET /xml
app.get('/xml', (req, res) => {
  const xmlData = '<person><name>John</name><age>30</age></person>';
  res.set('Content-Type', 'application/xml');
  res.send(xmlData);
});

// POST /formdata
app.post('/formdata', (req, res) => {
  req.on('data', (data) => {
    const formData = data.toString();
    console.log(formData);
  });
  res.sendStatus(200);
});

// Server starten
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
