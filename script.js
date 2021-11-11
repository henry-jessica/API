//getting the first element
// alert("test");
//APOD - 
let button = document.querySelector("#btn");

//Add event listener to the button runs the function sendApiRequest when it is clicked 

button.addEventListener("click", () => {
    console.log("button was clicked");
    sendApiRequest();
})

//An assynchronous function to fetch data from the API. 
async function sendApiRequest() {
    //I got this key from Nasa.gov 
    let API_KEY = "XAnguIzaGFxFtRChKTjkbOgTu6IHXAcoOTUhMvu7";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=XAnguIzaGFxFtRChKTjkbOgTu6IHXAcoOTUhMvu7`);//criate a variable that will wait for the request interpolation of the variavel API_KEY
    console.log(response); //bring just result positive or negative of the request works, its only a response element. a promise. 

    //get data 
    let data = await response.json(); //this await is waiting data to after this we are ready to see it on console in this case 
    console.log(data);
    useApidata(data);
}

//function that something with the data received from the API. The name of the function should be customised to whatever are you doing

function useApidata(data) {
    //insert information in our div content 
    document.querySelector("#content").innerHTML += data.explanation;
    document.querySelector("#content").innerHTML += `<iframe src="${data.url}">`;
}

