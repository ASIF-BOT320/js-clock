let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");
// FOR seconds

function setDate() {
    const NOW = new Date();
    const seconds = NOW.getSeconds();
    const secondsDegre = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegre}deg)`;
    console.log(seconds);

    // FOR MINUTES
    const mins = NOW.getMinutes();
    const minsDegre = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegre}deg)`;
    console.log(mins);

    // FOR hours
    const hours = NOW.getHours();
    const hoursDegre = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegre})`;

}

setInterval(setDate, 1000);