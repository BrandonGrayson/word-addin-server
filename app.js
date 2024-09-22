// Basic express scaffolding
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const https = require('https');
const fs = require('fs');

app.use(cors());

// Load your SSL certificate and key
const httpsOptions = {
    key: fs.readFileSync('/Users/brandongrayson/Desktop/code/projects/cobblestone/server.key'),
    cert: fs.readFileSync('/Users/brandongrayson/Desktop/code/projects/cobblestone/server.cert')
  };

// because GetTemplates is interacting with a db this would need to be an async funtion
const GetTemplates = () => {
    // this is where I would write a query most likely a SELECT */ALL to get relevant templates from the database
    // for demo sake the template is an array of objects with an id, name, and description from the looks of 
    // the instructions I'm not required to set up a db

    // this is the predefined contract templates
    // for demo sake they will be referenced as basic, advanced, and business templates respectively
    const templates = [
        { id: 1, name: 'Basic Contract', description: 'A basic Word template' },
        { id: 2, name: 'Advanced Contract', description: 'A more advanced Word template' },
        { id: 3, name: 'Business Contract', description: 'A business report template' },
    ];
    // what is returned from the db
    return templates
}

// home route of application
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route for user to access templates
app.get('/templates', (req, res) => {
    // calling the GetTemplates function to return all templates 
    const allTemplates = GetTemplates()
    res.json(allTemplates)
})

// what port node.js is running on
https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Example app listening on https://localhost:${port}`);
  });