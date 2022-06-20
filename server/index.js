const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { holding } = require('./main.js');

const { getCompliment } = require('./controller')

app.get("/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    res.status(200).send(compliments[Math.floor(Math.random() * compliments.length)]);
});
app.get("/api/helloThere", (req, res) => {
    res.status(200).send("like really why");
});
app.get("/api/really", (req, res) => {
    res.status(200).send("now I can actually understand the code lol");
});
// app.get("/api/what", (req, res) => {
//     // const deleteIt = (gone) => {
//         //     let taskElement = event.target.parentNode;
//         //     document.getElementById(gone).removeChild(taskElement);
//         //     }
//         //     for(let i = 0; i < holding.length; i++){
//             //         deleteIt(holding[i])
//             //     }
//             const elem = document.querySelector('button')
//             delete 
//             res.status(200).send("I thought the whole reason to have a controller was to access functionality easier and keep it organized not spread the functionality across platforms");
// });




app.listen(4000, () => console.log("Server running on 4000"));