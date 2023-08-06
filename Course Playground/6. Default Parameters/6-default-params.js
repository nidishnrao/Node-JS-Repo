//Using default parameters when arguments are not provided
const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Nidish')
greeter()