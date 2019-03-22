function takeANumber(line, name){
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
    if(line.length === 0){
        return `There is nobody waiting to be served!`
    } return `Currently serving ${line.shift(name)}.`
}

function currentLine(line) {
var line2 = [];
if(line > []) {
  for(var i = 0; i < line.length; i++) {
      line2.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + line2;
}
    else {
      return "The line is currently empty."
    }
}