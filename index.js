var katzDeli = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];

  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}

function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return `Currently serving ${line.shift()}.`;
  }
}

function takeANumber(line, name){
  line.push(name);

  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");

  return "Welcome, " + name + ". You are number " + line.length + " in line."
}









//Global variables
/*var katzDeliLine = [];
var assignedLineNum = 0;
var currentLineArray = [];

function takeANumber(currentLine, name) {
//adds name to "katzDeliLine array"
katzDeliLine.push(name);
assignedLineNum = assignedLineNum + 1;
console.log(`Welcome, ${name}. You are number ${assignedLineNum} in line.`);
currentLineArray.push(` ${assignedLineNum}. ${name}`)
};

function nowServing(katzDeliLine) {
if (katzDeliLine.length < 1) {
  console.log("There is nobody waiting to be served!");
} else {
  console.log(`Currently serving ${katzDeliLine[0]}.`);
  //REMOVE FIRST ARRAY ENTRY
  katzDeliLine.shift();
  assignedLineNum - 1;
  };
return katzDeliLine;
};


function currentLine() {
console.log(`The line is currently: ${currentLineArray.join()}`);
};
*/
