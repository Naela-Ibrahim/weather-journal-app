/* Global Variables */



// My API key to get data from openweathermap API
const myApiKey = '4f5f3648f8770e528fc0839350ab9d41';


// Get the 'generate' button and store it in a variable
const generateButton = document.getElementById('generate');


generateButton.addEventListener('click', doWhenClick)

// https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/47a9fa8a-af7d-4701-81d4-3aa6966f07e0/concepts/9292d504-e4db-464d-8c51-eb77e640f96f
// https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/710c6baf-41e9-4c9c-8ff3-d97763da566e/concepts/0fc174bc-2ecd-45dd-b8d5-5b339bd64f31
// Fetch data from ex API and store it in variables and create objData object with fetched data


async function doWhenClick (){
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

    // Get values of zip and user feelings values  
    const zipCode = document.getElementById('zip').value;
    const userFeel = document.getElementById('feelings').value;

    let base_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${myApiKey}&units=metric`;
    const response = await fetch(base_url);

    const dataRecievedFromExApi = await response.json();

    // Extract temp data from external API data and use to create the objData
    const temperature = dataRecievedFromExApi.main.temp;


    // https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/47a9fa8a-af7d-4701-81d4-3aa6966f07e0/concepts/527c00c8-3432-4384-9f8c-390e784e895d
    // Post data to server then update UI
    postData('/proData', {

      date : newDate,
    
      temp : temperature,
    
      content : userFeel,
     
    } ).then(
       ()=> {updateUI()}
    )
    
  }
                        


// Fetch data and stringify it and send to server
const postData = async ( url = '', projectData = {})=>{
    console.log(projectData);
      const response = await fetch('/saveRecievedData', {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
           
      body: JSON.stringify(projectData)
    });

  }

// https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/47a9fa8a-af7d-4701-81d4-3aa6966f07e0/concepts/527c00c8-3432-4384-9f8c-390e784e895d
// Update UI
const updateUI = async () => {
  const requestData = await fetch('/proData');
  try{
    const proData = await requestData.json();
    document.getElementById('date').innerHTML = proData.date;
    document.getElementById('temp').innerHTML = proData.temp;
    document.getElementById('content').innerHTML = proData.content + "... " +  'Have a great day!';
 

  }catch(error){
    console.log("error", error);
  }
}



  