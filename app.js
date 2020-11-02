const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const fs = require('fs');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data;
let randomNumber;


// on app load, return one question and update the questions array


app.get('/test', (req, res) => {
    res.send({data: "test"})
})

app.get('/home', (req, res) => {
    fs.readFile('./Apprentice_TandemFor400_Data.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        } else {
            data = JSON.parse(jsonString);
            randomNumber = Math.floor((Math.random() * (data.length - 0)));
            
            // update array and retrieve question
            let returnedData = data.splice(randomNumber, 1)

            // return one question
            console.log(returnedData)
            res.send({data: returnedData})
        }


    })
})

app.get('/next', (req, res) => {

})

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "new-tandem", "build", "index.html"))
// })

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`server is running on port ${port}`))