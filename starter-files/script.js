
const API_ENDPOINT = "https://icanhazdadjoke.com/";

const joke = document.querySelector('#joke');
const button = document.querySelector('#button');
const loader = document.querySelector('#loader')



button.addEventListener("click", getDadJokes)

function getDadJokes() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_ENDPOINT);
    
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.responseType = 'json';

    xhr.onload = () => {
        const data = xhr.response.joke;
        
        console.log(data);
        jokeDisplay(data);
    }
    xhr.send();
    
};

function jokeDisplay(data) {
    joke.innerHTML = data
    
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


