const fs = require("fs")



console.log("hello")
const name = "Matt"
console.log("hello "+name)



function getOutput() {
  let str = ""
  for (let i=0;i<100;i++) {
    str = str+Math.random()+"\n"
  }
  return str
}

fs.writeFileSync("output.txt", getOutput())


const text=fs.readFileSync("input.txt","utf8")
console.log(text)
