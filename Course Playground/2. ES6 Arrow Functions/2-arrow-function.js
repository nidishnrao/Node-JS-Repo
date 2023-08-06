// const square = function(x){
//     return x*x
// }


//Arrow function
// const square = (x) => {
//     return x*x
// }

//or

// const square = (x) => x*x

// console.log(square(4))

// const event = {
//     name: 'Birthday Party',
//     printGuestList : function(){
//         console.log('Guest list for '+ this.name)
//     }
// }

//Arrow functions as properties and object

const events = {
    name: 'Birthday Party',
    guestList : ['Nidish','Andrew','Mark'],
    printGuestList(){
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest) => {
            console.log(guest +' is attending '+ this.name)
        })
    }
}


events.printGuestList()

//NOTE
// 1. If a function is a method, use ES6 method definition syntax (i.e   examplefunction(){......} )
// 2. Orelse use most concise arrow function possible (i.e   examplefunction:()=>{......} )