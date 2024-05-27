let time = Date();

function clearConsole() {
    console.clear();
}

function displayTime() {
    let now = new Date();
    const timestring = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(timestring);
}

function startClock() {
    setInterval(() => {
        clearConsole();
        displayTime();
    }, 1000);
}

startClock();