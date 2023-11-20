const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';

// this is the endpoint for the API that we want to get a reponse from
const endpoint = 'https://southparkquotes.onrender.com/';


async function getJsonWithFetch1() {
    try {
    const fetchData = await fetch("https://southparkquotes.onrender.com/v1/quotes",{""});
    const jsonData = await fetchData.json();
    console.log(jsonData);

    }

    catch(error) {
        console.error("COULD NOT GET DATA FROM API")
    }
}



async function getQuote(){
    const block = document.createElement("h2");
    const fetchData = await fetch("https://southparkquotes.onrender.com/v1/quotes",{
        headers: {
            "Accept": "application/json"
        }
    })

    .then ((response) => {return response.json()})
    .then ((jsonData) => { 

        //block.setAttribute("id", `block${tick}`)
        //block.innerHTML = jsonData["joke"];


    console.log(jsonData);

    base.appendChild(block);
    tick++;
    buildImage(jsonData["joke"]);
    });
}




async function getQuote() {
   // try -> tries something; if it returns an error, it puts us into the catch block
    try {
        const response = fetch(endpoint);

        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = response.json();
        
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        displayQuote(json['question']);
        answer = json['answer'];
        answerTxt.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}

// this function shows the answer
function displayAnswer() {
    answerTxt.textContent = answer;
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();


//'https://quokka.pics/'
//'{"image":"https:\/\/quokka.pics\/i\/109.jpg"}'


