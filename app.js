console.log('Starting the app')

setTimeout(() => {
    console.log('1st Timer')
}, 2000)

setTimeout(()=> {
    console.log('2nd Timer')
}, 0)

console.log('Stopping the app')