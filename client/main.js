   
   var tag = document.createElement("body");
   var text = document.createTextNode("do you like star wars facts");

   holding = [];

   
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);




//    let button = document.createElement('button');button.innerText = 'no';button.id = 'no';button.addEventListener('click', () => {alert('ok I guess your a trekky!')});document.body.appendChild(button);
//    const button = document.createElement('button');button.innerText = 'no';button.addEventListener('click', () => {alert('ok I guess your a trekky!')});document.body.appendChild(button)




let i = 1;
let body = document.getElementsByTagName("body")[0];


let ans = []

const loopThroughArray = (arr) => {
    // console.log(Object.values(arr[i]))
    // console.log(arr)
    for(let i = 0; i < arr.length; i++){
        // ans.push(`${Object.keys(arr[i])}`)
        holding.push(`${(Object.values((arr[i].name))).join('')}`)
        let button = document.createElement('button');
        // console.log(arr.name)
        button.id = `${(Object.values((arr[i].name))).join('')}`
        // if(arr.name === Object.values(arr[i])){
        // }
        if(Object.values(arr[i]).length > 1){
        button.innerHTML = (Object.values((arr[i].name))).join('')
        }
        
        console.log(Object.keys(arr[i]))
        body.appendChild(button);
        button.addEventListener ("click", function() {
            alert(Object.values(arr[i]).length)
            if(typeof(arr[i]) === 'object'){
                loopThroughArray((Object.values(arr[i])[button.id]))
            }
            })}}    

    



const tree = (reply) => {
    axios.get(reply)
    .then(res => {






        // console.log(typeof(res.data))
        for(let j = 0; j < Object.keys(res.data).length; j++){
            // console.log(reply)
            // console.log(Object.keys(res.data)[j])
            // console.log(Object.keys(res.data).length)
            // for(let i = 0; i < )
            ans.push(`${Object.keys(res.data)[j]}`)
            
            let button = document.createElement('button');
            holding.push(`${ans.join('')}`)
            button.id = `${j}`
            button.innerHTML = `${ans.join('')}`
            body.appendChild(button);
            button.addEventListener ("click", function() {
        
        axios.get(reply).then(res => {


        isItObject = (`${reply}${Object.keys(res.data)[button.id]}/`)
        axios.get(isItObject).then(res => {

        alert(isItObject)
        // console.log(`${isItObject}`)
        tree(`${isItObject}`)
    
})
        .catch(function () {
            // if there is a an array
            if(typeof(Object.values(res.data)[button.id]) === 'object'){
                loopThroughArray((Object.values(res.data)[button.id]))
            }
            // console.log(typeof(Object.values(res.data)[button.id]))
            // console.log((Object.values(res.data)[button.id]))
        })
})
})
ans = []
ans1 = []
    }

})}
// const deleteBtn = () => {
//     let button = document.createElement('button');
                
//                 button.id = `${j}`
//                 button.innerHTML = `${ans.join('')}`
//                 body.appendChild(button);
//                 button.addEventListener ("click", function(){
                    
//                 }
//                 )
// deleteBtn()
// let deleteItem = function(event){
//     let isDeleteBtnClicked = event.target.className === 'delete-btn';

//    if(isDeleteBtnClicked){
//       let taskElement = event.target.parentNode;
//       document.getElementById('task-list').removeChild(taskElement);
//   }


tree("https://swapi.dev/api/")

// res.data[Object.keys(res.data)[0]].length // 29




// for (i; i <= 20; i++) {
//   let button = document.createElement("button");
//   button.innerHTML = 'Button '+i;
//   button.id = `${i}`
//   body.appendChild(button);
//   button.addEventListener ("click", function() {
//     alert(this.innerHTML);
//   });
// }
// for (i; i <= 20; i++) {
//   let button = document.createElement("button");
//   button.innerHTML = 'Button '+i;
//   button.id = `${i}`
//   body.appendChild(button);
//   button.addEventListener ("click", function() {
//     alert(this.innerHTML);
//   });
// }



let planet1 = ''

let x = ''
// const residents = document.querySelector("#1")
// residents.addEventListener('click', buttonWorked)
// residents.addEventListener('click', () => x = 'climate')
// const name1 = document.querySelector("#2")
// name1.addEventListener('click', buttonWorked)
// name1.addEventListener('click', () => x = 'name')
// const rotation_period1 = document.querySelector("#3")
// rotation_period1.addEventListener('click', buttonWorked)
// rotation_period1.addEventListener('click', () => x = 'rotation_period')
// const orbital_period1 = document.querySelector("#4")
// orbital_period1.addEventListener('click', buttonWorked)
// orbital_period1.addEventListener('click', () => x = 'orbital_period')
// const diameter1 = document.querySelector("#5")
// diameter1.addEventListener('click', buttonWorked)
// diameter1.addEventListener('click', () => x = 'diameter')
// const climate1 = document.querySelector("#6")
// climate1.addEventListener('click', buttonWorked)
// climate1.addEventListener('click', () => x = 'climate')
// const gravity1 = document.querySelector("#7")
// gravity1.addEventListener('click', buttonWorked)
// gravity1.addEventListener('click', () => x = 'gravity')
// const terrain1 = document.querySelector("#8")
// terrain1.addEventListener('click', buttonWorked)
// terrain1.addEventListener('click', () => x = 'terrain')
// const surface_water1 = document.querySelector("#9")
// surface_water1.addEventListener('click', buttonWorked)
// surface_water1.addEventListener('click', () => x = 'surface_water')
// const population1 = document.querySelector("#get-population")
// population1.addEventListener('click', buttonWorked)
// population1.addEventListener('click', () => x = 'population')
// const created1 = document.querySelector("#get-created")
// created1.addEventListener('click', buttonWorked)
// created1.addEventListener('click', () => x = 'created')
// const url1 = document.querySelector("#get-url")
// url1.addEventListener('click', buttonWorked)
// url1.addEventListener('click', () => x = 'url')


// const input1 = document.querySelector('#search')
// const input2 = document.querySelector('#search-box')
// const input3 = document.querySelector('#clear-box')
// const input4 = document.querySelector('#next-box')

// let hold = ''


// //this is suposed to take in a value from the search and see what the url is


// let spot = 0
    


// let myUrl = ['1']
// const cons = () => {
//     hold = document.querySelector("#input-box").value    
//     axios.get("https://swapi.dev/api/planets/")
//     .then(res => {
//         let planets = res.data[Object.keys(res.data)[3]]
//         for(let i = 0; i < planets.length; i++){
//             if(planets[i].name == hold){
//                 myUrl.push(planets[i].url)}}
//                 const climate1 = res.data[`${x}`]
//             })
//             return hold
//         }



//         // const next = () => {

//         //     axios.get("https://swapi.dev/api/planets/")
//         //     .then(res => {
//         //         let planets = res.data[Object.keys(res.data)[3]]
                        
//         //                 myUrl = (planets[spot].url)
//         //                 document.querySelector("#input-box").value = `${planets[spot].name}`
//         //                 spot++
//         //             })
//         //             // console.log(planets)
//         //             if(spot> planets.length){
//         //                 spot = 0
//         //                 console.log(spot)
//         //             }
//         // }


//         const clear = () => {
//             myUrl = ['1']; 
//             document.querySelector("#input-box").value = ''}
            
//             input2.addEventListener('click', cons)
            
//             input3.addEventListener('click', clear)
//             // input4.addEventListener('click', next)
//             // input5.addEventListener('click', prev)
            
    
    
    
    
    
    
    
    
    
//     function buttonWorked() {
//         axios.get(myUrl[1])
//         .then(res => {
//             const responce1 = res.data[`${x}`]
//             alert(`${responce1}`)
//         })
//     }
    

//     // const clear = () => {
//     //     myUrl = ['1']; 
//     //     document.querySelector("#input-box").value = ''}
    
//     // for(let i = 0; i < res.data.residents.length; i++){
//         //     console.log(res.data.residents)
//         //     let arr = res.data.residents
//         //     console.log(arr[i])
//         // } 
//         // console.log(arr)


























// // const express = require("express");
// // const cors = require("cors");

// // const app = express();

// // app.use(cors());

// // app.use(express.json());



// // const getCompliment = () => {app.get("/api/compliment", (req, res) => {
// //     const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];res.status(200).send(compliments[Math.floor(Math.random() * compliments.length)]);
// // })};

    

    
    
    
    
// // document.getElementById("complimentButton").addEventListener('click', getCompliment)

// // app.listen(4000, () => console.log("Server running on 4000"));