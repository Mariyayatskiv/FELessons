// let element = document.getElementById('element');

// console.log(element)

// element.onclick = clickTrigger(event, 1, 2, 3)
// element.onclick = function() {
    // clickTrigger(null, 1, 2, 3)
    // console.log('Clicked!')
    // console.log(e.target, num1, num2, num3)
// }

// function clickTrigger(test123, num1, num2, num3) {
//     // console.log('Clicked with ', num1, num2, num3)
//     console.log(test123.target, num1, num2, num3)
//     // console.log(el)
// }

// element.onclick = function(event) {
//     event.target.innerHTML = +event.target.innerHTML + 1;
//     if(+event.target.innerHTML >= 100) {
//         event.target.style.width = '30px'
//     }
// }

// let counter = document.getElementById('counter'),
//     counterBtn = document.getElementById('counterBtn');

// counterBtn.onclick = function() {
//     // ++counter.innerHTML
//     counter.innerHTML = +counter.innerHTML + 1
// }


// document.oncontextmenu = function() {
//     console.log('Mouse right button')
// }


// element.onclick = function() {
//     console.log(2)
// }

// element.addEventListener('click', () => console.log(2))
// console.log(1)
document.addEventListener('DOMContentLoaded', () => {
    // console.log(2)
    // let element = document.getElementById('element');

    // element.onclick = function() {
    //     console.log(1)
    // }

    // element.addEventListener('click', clickFunction)
    // // element.removeEventListener('click', clickFunction)
    toogleElement()


    // keydown
    // keyup
    // keypress


    document.addEventListener('keydown', event => {
        event.preventDefault()
        
        console.log(event)

        if(event.ctrlKey && event.which === 83) {
            console.log('Ctrl + S pressed')
        }
    })
})

window.addEventListener('resize', resizeFunc)


function resizeFunc() {
    toogleElement()
}

function toogleElement() {
    let element = document.getElementById('element');
    
    if(element) {
        if(window.innerWidth <= 768) {
            element.style.display = 'none'
        } else {
            element.style.display = 'block'
        }
    }
}

function clickFunction() {
    console.log(2)
}