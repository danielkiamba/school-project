/*let currentDate = new Date();
let date1 = document.getElementById(`date`);
date1.innerHTML = currentDate; */
function updateDateTime(){
    let now = new Date();
    let options = {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        timeZoneName: `short`


    };
    let formatedDateTime = now.toLocaleString(undefined, options);
    document.getElementById(`date`).innerHTML = formatedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);

//let headerColour = document.querySelector(`header`);
/*let colours = [`red`,`blue`,`green`,`pink`];
let counter = 0;*/


function headerColors(){
    headerColour = document.getElementsByTagName(`header`)[0];
    let red = Math.round(Math.random()*255);
    
    let green = Math.round(Math.random()*255);
    
    let blue = Math.round(Math.random()*255);
    
    let changeColour = `rgb(${red},${green},${blue})`;
    headerColour.style.backgroundColor = changeColour;
    }
    
    

setInterval(headerColors, 4000);


function showQuiz() {
    document.getElementById("quizModal").style.display = "block";
}

function closeQuiz() {
    document.getElementById("quizModal").style.display = "none"; 
} 

//  reviews section

// local reviews
const reviews = [
    {
      id: 1,
      name: `susan smith`,
      job: `web developer`,
      img: `review5.jpeg`,
      text: `The golden sun dipped below the horizon, casting a warm glow over the peaceful ocean waves as seagulls soared high above, calling. `
    },
  
    {
      id: 2,
      name: `arina sabalenka`,
      job: `web desigener`,
      img: `review2.jpeg`,
      text: `Elena Andreyevna Rybakina[a] (born 17 June 1999) is a Russian-born Kazakhstani professional tennis player. She has been ranked world No. 3 in women's singles by the Women's Tennis Association (WTA),   <span class="quote-icon
              ">
                  <i class="fas fa-quote-right"></i>
              </span>`
    },
  
    {
      id: 3,
      name: `jessica pegula`,
      job: `accountant`,
      img: `review4.jpeg`,
      text: `n the quiet forest, rustling leaves danced with the wind, while a curious squirrel paused, watching the distant river flowing endlessly forward.`
    },
  
    {
      id: 4,
      name: `elina svitolina`,
      job: `project manager`,
      img: `review6.jpeg`,
      text: `Books lined the dusty wooden shelves, their stories waiting to be discovered, while the old librarian hummed softly, lost in nostalgic memories.
  
  Let me know if you need something different! 😊`
    }
  ];
  // select items
  const img = document.getElementById(`person-img`);
  const author = document.getElementById(`author`);
  const job = document.getElementById(`job`);
  const info = document.getElementById(`info`);
  
  const prevBtn = document.querySelector(`.prev-btn`);
  const nextBtn = document.querySelector(`.next-btn`);
  const randomBtn = document.querySelector(`.random-btn`);
  
  // set starting item
  let currentItem = 0;
  // load initial item
  window.addEventListener(`DOMContentLoaded`, function () {
    showPerson(currentItem);
  });
  // show person based on item
  function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener(`click`, function () {
    currentItem++;
    if (currentItem > reviews.length -1 ) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener(`click`, function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length -1 ;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener(`click`, function () {
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    
  
    showPerson(currentItem);
  });


// prime number section


function primeNumber() {
  let input = document.getElementById("prime").value.trim();
  let isPrime = true;
  const x = document.getElementById("loop");
  document.getElementById(`prime`).value = ``;
  

  try {
      if (input === `` || isNaN(input)) {
          throw new Error(`${input} is not a valid number. Please enter a number.`);
      }
  
      let number = Number(input);
      // Check if number is 1
      if (number === 1) {
          x.innerHTML = "1 is neither a prime nor composite number.";
          return;
      }

      // Check if number is greater than 1
      else if (number > 1) {
          for (let i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) {
                  isPrime = false;
                  break;
              }
          }

          x.innerHTML = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;

      } else {
          x.innerHTML = `${number} is not a prime number. Numbers less than 1 are not considered prime numbers.`;
      }
  } catch (error) {
      console.error(error);
      x.innerHTML = error.message; // Ensure the error message is displayed
  }
  
}

  // quote generator section

  const quotes = [
    '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    '"In the middle of every difficulty lies opportunity." - Albert Einstein',
    '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
    '"Do what you can, with what you have, where you are." - Theodore Roosevelt',
    '"Believe you can and you’re halfway there." - Theodore Roosevelt',
    '"Don’t watch the clock; do what it does. Keep going." - Sam Levenson',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
    '"It always seems impossible until it’s done." - Nelson Mandela',
    '"You only live once, but if you do it right, once is enough." - Mae West',
    '"Happiness depends upon ourselves." - Aristotle',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '"Be yourself; everyone else is already taken." - Oscar Wilde',
    '"Difficulties in life are intended to make us better, not bitter." - Dan Reeves',
    '"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Ralph Waldo Emerson',
    '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
    '"If you want to fly, you have to give up the things that weigh you down." - Toni Morrison',
    '"Success is getting what you want. Happiness is wanting what you get." - Dale Carnegie',
    '"Everything you’ve ever wanted is on the other side of fear." - George Addair',
    '"It is not length of life, but depth of life." - Ralph Waldo Emerson',
    '"Act as if what you do makes a difference. It does." - William James',
    '"Perfection is not attainable, but if we chase perfection we can catch excellence." - Vince Lombardi',
    '"The secret of getting ahead is getting started." - Mark Twain',
    '"Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs',
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Turn your wounds into wisdom." - Oprah Winfrey',
    '"Keep your face always toward the sunshine—and shadows will fall behind you." - Walt Whitman',
    '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." - Ralph Waldo Emerson',
    '"It’s not whether you get knocked down, it’s whether you get up." - Vince Lombardi',
    '"You miss 100% of the shots you don’t take." - Wayne Gretzky',
    '"Strive not to be a success, but rather to be of value." - Albert Einstein',
    '"Opportunities don’t happen. You create them." - Chris Grosser',
    '"Life is what happens when you’re busy making other plans." - John Lennon',
    '"I have not failed. I’ve just found 10,000 ways that won’t work." - Thomas Edison',
    '"If you can dream it, you can do it." - Walt Disney',
    '"Everything has beauty, but not everyone sees it." - Confucius',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Doubt kills more dreams than failure ever will." - Suzy Kassem',
    '"Do what you feel in your heart to be right – for you’ll be criticized anyway." - Eleanor Roosevelt',
    '"If opportunity doesn’t knock, build a door." - Milton Berle',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." - Mahatma Gandhi',
    '"A journey of a thousand miles begins with a single step." - Lao Tzu',
    '"Courage is resistance to fear, mastery of fear—not absence of fear." - Mark Twain',
    '"No act of kindness, no matter how small, is ever wasted." - Aesop',
    '"Dream big and dare to fail." - Norman Vaughan',
    '"A champion is defined not by their wins but by how they can recover when they fall." - Serena Williams',
    '"What we achieve inwardly will change outer reality." - Plutarch',
    '"The only impossible journey is the one you never begin." - Tony Robbins',
    '"Be the change that you wish to see in the world." - Mahatma Gandhi',
    '"Do what you love, and you’ll never work a day in your life." - Marc Anthony'
];

// Get a random quote
/* const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
}

// Example usage:
console.log(getRandomQuote()); // Logs a random quote inside double quotes*/
const usedIndexes = new Set();
const quoteTag = document.getElementById(`quote`);

function generateQuote(){

if(usedIndexes.size >= quotes.length){
    usedIndexes.clear();
}


while(true){

const random1Index = Math.floor(Math.random()* quotes.length);
if(usedIndexes.has(random1Index)) continue

const quote = quotes[random1Index];
quoteTag.textContent = quote;
usedIndexes.add(random1Index);
break;


}
}
function copyQuote() {
const quoteText = document.getElementById('quote').textContent;
navigator.clipboard.writeText(quoteText).then(() => {
    alert('Quote copied to clipboard!');
}).catch(err => {
    console.error('Failed to copy: ', err);
});
}

