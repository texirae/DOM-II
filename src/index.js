import './less/index.less'

// Your code goes here!

window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`);
    const heading = document.querySelector('h1');
    console.log(heading);
    heading.textContent = 'READY TO GO!'
    
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            console.log()
        })
    })

}