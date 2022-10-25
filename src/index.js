import './less/index.less'

// Your code goes here!


// LOAD
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`);
    const heading = document.querySelector('h1');
    console.log(heading);
    heading.textContent = 'READY TO GO!'
    
    //COPY
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            console.log()
        })
    })

    //CLICK
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    //DOUBLECLICK
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

    //KEYDOWN
    window.addEventListener('keydown', evt => {
        if(evt.key == 6){
            document.body.innerHTML = '<h1>YOU RAN ORDER 66!</h1>'
        }
    })

    //MOUSEMOVE
    document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt
    })

    //MOUSEENTER
    //MOUSELEAVE
    const destinations = document.querySelectorAll('.destination')
    for(let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }

}