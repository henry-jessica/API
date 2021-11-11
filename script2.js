// alert("test");
let searchButton = document.querySelector("#btn")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    //first create a variavel to key 
    const KEY_DEMO = "xjos0wxVf3ZssQpJBwhMi3jGPc2qTHf38BRxygRc";
    let response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=${KEY_DEMO}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    //get data 
    useApiData(data);

}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
    document.querySelector("#content").innerHTML += data.resource.planet
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`;
}


