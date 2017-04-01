// Creating an array of objects and assign to a variable named quotes
var quotes = [
    {
        quote: "You can do anything but not everything",
        source: "David Allen",
        citation: "Making It All Work",
        year: "2009",
        categorization: ""
    },
    {
        quote: "It is by loving, and not by being loved, that one can come nearest the soul of another",
        source: "George MacDonald",
        citation: "Scottish poet",
        year: "1824-1905",
        categorization: ""
    },
    {
        quote: "A truth that is told with bad intent beats all the lies you can invent",
        source: "William Blake",
        citation: "English poet",
        year: "1757-1827",
        categorization: ""
    },
    {
        quote: "It is better to live one day as a lion, than thousand days as a sheep",
        source: "Roman Proverb",
        citation: "",
        year: "",
        categorization: "Inspirational"
    },
    {
        quote: "Stay hungry, stay foolish",
        source: "Steve Jobs",
        citation: "",
        year: "2005",
        categorization: "Inspirational"
    },
    {
        quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth",
        source: "Marcus Aurelius",
        citation: "",
        year: "",
        categorization: "Inspirational"
    },
    {
        quote: "Edison failed 10 000 times before he made the electric light. Do not be discouraged if you fail a few times",
        source: "Napoleon Hill",
        citation: "",
        year: "",
        categorization: "Motivational"
    }
];


// Creating a function called getRandomQuote and passing a "generic" as a parameter
function getRandomQuote(array) {
    for (var i = 0; i < array.length; i++) {
        var random = Math.floor(Math.random() * array.length);
        return array[random];
    }
}


//console.log(getRandomQuote(quotes));

// Passing quotes array as an argument into getRandomQuote function, and assigning to quote variable
//var quote = getRandomQuote(quotes);

// Creating the printQuote function passing in the arr parameter
function printQuote(arr) {

    if (arr.citation === "" && arr.year === "") {
        document.getElementById('quote-box').innerHTML =` 
            <p class="quote">${arr.quote}</p>
            <p class="source">${arr.source} 
            </p>`
    } else if (arr.citation === "") {
        document.getElementById('quote-box').innerHTML =`
            <p class="quote">${arr.quote}</p>
            <p class="source">${arr.source}
            <span class="year">${arr.year}</span>
            </p>`
    } else if (arr.year === "") {
        document.getElementById('quote-box').innerHTML =`
            <p class="quote">${arr.quote}</p>
            <p class="source">${arr.source}
            <span class="citation">${arr.citation}</span>
            </p>`
    } else {
        document.getElementById('quote-box').innerHTML =` 
            <p class="quote">${arr.quote}</p>
            <p class="source">${arr.source}
            <span class="citation">${arr.citation}</span>
            <span class="year">${arr.year}</span>
            </p>`
    }
}

// Calling the printQuote function and passing in the quote variable which has the function getRandomQuote assigned to it as an argument
//printQuote(quote);

// Creating a function to randomize background colour
function generateRandomColour() {
    var red = Math.floor(Math.random() * 256 );
    var green = Math.floor(Math.random() * 256 );
    var blue = Math.floor(Math.random() * 256 );
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.style.background = rgbColor; // I needed to look this up on stack over flow
}

// Calling the randomize function
//generateRandomColour();

// Instead of have seperate functions which I had commented above, I had grouped the functions within a function expression below.
// Calling the generatRandomColour and printQuote.
var getAndPrintQuote = function() {
    var quote = getRandomQuote(quotes);
    generateRandomColour();
    printQuote(quote);

};

getAndPrintQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// The code below could only work when being at the bottom of the code, as I had used function expression getAndPrintQuote.
// If I used function declaration, then yes, it would have been possible leave the code below, at the top of the code.
// All to do with hoisting.
document.getElementById('loadQuote').addEventListener("click", getAndPrintQuote, false);
/*

var timeoutID;

function timedQuote() {
    timeoutID = window.setTimeout(getAndPrintQuote, 2000);
}

function clearTimedQuote() {
    window.clearTimeout(timeoutID);
}

//timedQuote();
*/

// Setting a timed interval to loop over quotes every x seconds
setInterval(getAndPrintQuote, 10000);
