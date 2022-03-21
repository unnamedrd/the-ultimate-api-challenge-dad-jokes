
const API_ENDPOINT = "https://icanhazdadjoke.com/";
const request = new XMLHttpRequest();
const joke = document.querySelector('#joke');
const button = document.querySelector('#button');
const loader = document.querySelector('')

request.addEventListener("load", getDadJokes);
request.open("GET", API_ENDPOINT);
var data = JSON.parse(xhr.responseText);
request.send();


function getDadJokes() {
    
}

/**
 * 1. Initialize an XMLHttpRequest constructor
 * 2. Open a GET request, set the headers and response type
 * 3. Output successful response
 * 4. Output error state
 * 5. Combine with an event listener (button)
 * 6. Adjust UI states accordingly
 * 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */


