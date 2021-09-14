// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3030;
// https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/67f93c1e-ba0e-4049-80c8-9e548fccace0/concepts/1b9b1620-cb5b-4289-9caf-afd31d498d86
const server = app.listen(port, ()=>{console.log(`server is running on: ${port}`)});

// Add a GET route that returns the projectData object 
app.get('/page1', function (req, res){
    res.send(projectData);
  
})

// add a POST route that adds incoming data to projectData
app.post('/page2', function (req, res){
    console.log(req.body);
    userEntry = {
        temperature : req.body.temp,
        date : req.body.date,
        user_response : content
    }
    projectData = userEntry;
})

