let count = 5;

function counter() {
    console.log(count);
    count -= 1;
    if (count < 0) {
        clearInterval(intervalId);
        return count;
    }
}


let intervalId = setInterval(counter, 1000);