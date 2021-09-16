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
app.get('/proData', function (req, res){
    res.send(projectData);
  
})


// https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/710c6baf-41e9-4c9c-8ff3-d97763da566e/concepts/bfcd4972-22ff-47ff-9b2e-5453af288361
// Add a POST route that adds incoming data to projectData
app.post('/saveRecievedData', function (req, res){
   req.body = projectData
    console.log(req.body)
    res.end()    
})

// https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/710c6baf-41e9-4c9c-8ff3-d97763da566e/concepts/17a01afa-4238-4e33-96fe-c617ee95337a
app.get('/proData', function (req, res){
    res.send(postData)
})