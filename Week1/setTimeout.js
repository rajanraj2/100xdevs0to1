function greet() {
    console.log('Hello, World!');
    let endTime = new Date();
    let difference = endTime - startTime;
    console.log('Difference:', difference);
}

let startTime = new Date()
setTimeout(greet, 3000);
