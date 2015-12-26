console.log(process.argv);
console.log("");

// argv

function getPassedArgument(flag) {
    var flagNameValue = process.argv.indexOf(flag);
    return (flagNameValue === -1) ? null : process.argv[flagNameValue + 1];
}

var userName = getPassedArgument("--name");

if(!userName) {
    console.log("enter a parameter");
} else {
    console.log("Welcome " + userName);
}
console.log("");

// stdout
process.stdout.write("Hello World\n");

