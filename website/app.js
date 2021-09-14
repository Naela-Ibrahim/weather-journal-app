/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// My API key to get data from openweathermap API
let base_url = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
let myCredentials = 'APPID=4f5f3648f8770e528fc0839350ab9d41';

// Add event listener to the 'generate' button
// First get the 'generate' button and store it in a variable
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', doWhenClick)

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
           
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

