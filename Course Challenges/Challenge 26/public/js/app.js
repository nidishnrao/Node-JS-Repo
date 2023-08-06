console.log('Client side javascript file is loaded!')

//We are using Fetch-API, It is not a part of javascript but a browser based API and can't be used in node as it is client side
//https://puzzle.mead.io/puzzle to get random json response

fetch('http://localhost:3000/weather?address=udupi').then((response) => {
    response.json().then((data) => {
        console.log(data)
        if (data.error) {
            console.log(data.error)
        } 
        else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

const weatherForm =document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()  //event to prevent default behaviour on submit in browser
    const location = search.value
    console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        console.log(data)
        if (data.error) {
            console.log(data.error)
        } 
        else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})