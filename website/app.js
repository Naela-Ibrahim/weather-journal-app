/* Global Variables */



// My API key to get data from openweathermap API

let myApiKey = '4f5f3648f8770e528fc0839350ab9d41';


// Get the 'generate' button and store it in a variable
const generateButton = document.getElementById('generate');


generateButton.addEventListener('click', doWhenClick)

// Fetch 
async function doWhenClick (){
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    // Get values of zip and user feelings values  
    const zipCode = document.getElementById('zip').value;

    let base_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${myApiKey}&units=metric`;
    const userFeel = document.getElementById('feelings').value;
    const response = await fetch(base_url);
    const dataRecievedFromExApi = await response.json();
    const temperature = dataRecievedFromExApi.main.temp;
    const objData = {
      date : newDate,
      temp : temperature,
      content : userFeel,
      message : "Have a great day !"
    }

    console.log(objData)
    
                             
}


const postData = async ( url = '', projectData = {})=>{
    console.log(projectData);
      const response = await fetch('/saveRecievedData', {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      
           
      body: JSON.stringify(objData)


    });

   
    
  }

  postData


  