const fs = require("fs")
const express=require ("express")
const jsonfile=require ("jsonfile")
const app=express()

app.get("/hello", sayHello)
app.get("/random", showRandom)
app.get("/meteors", showMeteors)


//http://localhost:8765/hello?name=matt&password=secret
function sayHello(req,res) {
  const name=req.query.name
  const password=req.query.password
  if (password=="secret") {
    res.json({"success":true, "greeting":"Hello, "+name})
  } else {
    res.json({"success":false})
  }

}

function showRandom(req,res) {
  res.send(Math.random().toString()+"!")
}

function showMeteors(req,res) {

  const meteors=jsonfile.readFileSync("meteors.json")
  for (let meteor of meteors) {
    if (meteor.name == req.query.city) {
      res.json({city:req.query.city, meteor:meteor})
      return
    }
  }
  res.status(404).json({error:"Not found"})


}




app.listen(process.env.PORT || 8765, onReady)

function onReady() {
  console.log("Server is now running!")
}

//
// console.log("hello")
// const name = "Matt"
// console.log("hello "+name)
//
//
//
// function getOutput() {
//   let str = ""
//   for (let i=0;i<100;i++) {
//     str = str+Math.random()+"\n"
//   }
//   return str
// }
//
// fs.writeFileSync("output.txt", getOutput())
//
//
// const text=fs.readFileSync("input.txt","utf8")
// console.log(text)
