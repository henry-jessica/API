
// alert("hello");
let button = document.querySelector("#btn")

button.addEventListener("click", () => {
    console.log("button was clicked");
    sendApiRequest();
})


async function sendApiRequest() {
    const KEY_DEMO = "xjos0wxVf3ZssQpJBwhMi3jGPc2qTHf38BRxygRc";
    const requestURL = `https://api.nasa.gov/planetary/apod?api_key=${KEY_DEMO}`;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        const data = request.response;
        displayImage(data);
    }
}

function displayImage(data) {
    //Create Image Element
    let myVid = document.createElement('iframe');
    myVid.setAttribute('src', data.url);
    document.body.appendChild(myVid);
    // document.querySelector("#content").innerHTML += `<iframe src="${data.url}">`;
}
