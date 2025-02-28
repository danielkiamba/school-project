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

