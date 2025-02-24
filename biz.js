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

let headerColour = document.querySelector(`header`);
let colours = [`red`,`blue`,`green`,`pink`];
let counter = 0;

function changeColour(){
if(counter >= colours.length){
    counter = 0;
}

headerColour.style.background = colours[counter];
counter +=1;

}

setInterval(changeColour, 4000);
