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


function primeNumber() {
  let input = document.getElementById("prime").value.trim();
  let isPrime = true;
  const x = document.getElementById("loop");
  

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

  

