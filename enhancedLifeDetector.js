// node enhancedLifeDetector.js 2

// The line of code below reads in the value of the argument passed in after
// the name of your script
switch (Number(process.argv[2])) {
  case 0:
    console.log("alive");
    break;
  case 1:
    console.log("flowering");
    break;
  case 2:
    console.log("shedding");
    break;
  default:
    console.log("other");
}
