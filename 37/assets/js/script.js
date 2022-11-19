// function checkTrueOrFalse(value, yes, no) {
//     if(value) {
//         yes()
//     } else {
//         no()
//     }
// }

// function showTrue() {
//     console.log('True state')
// }

// function showFalse() {
//     console.log('False state')
// }

// checkTrueOrFalse(confirm('Press ok or cancel'), showTrue, showFalse)


// loadPage();

// function loadPage() {
    // let xhr = new XMLHttpRequest;

    // xhr.open('GET', 'pages/main.html')
    // xhr.send()

    // xhr.onreadystatechange = function () {
    //     let content = document.getElementById('content');

    //     if (xhr.readyState === 3) {
    //         content.innerHTML = 'Loading...';
    //     }

    //     if (xhr.readyState === 4) {
    //         console.log(xhr)
    //         if(xhr.status === 404) {
    //             content.innerHTML = 'Not found'
    //         } else {
    //             content.innerHTML = xhr.response
    //         }
    //     }
    // }

    // fetch('pages/main.html')
    //     .then(res => {
    //         if(!res.ok) {
    //             throw Error(res.statusText)
    //         }

    //         return res.text()
    //     })
    //     .then(data => {
    //         console.log(data)

    //         let content = document.getElementById('content');
    //         content.innerHTML = data
    //     })
    //     .catch(error => {
    //         let content = document.getElementById('content');
    //             // text = document.createElement('p');

    //         // text.classList.add('error')
    //         // text.innerHTML = error
    //         // content.innerHTML = ''
    //         // content.append(text)
    //         content.classList.add('error')
    //         content.innerHTML = error
    //     })
        // .finally(() => {

        // })
    // let content = document.getElementById('content');

    // axios('pagese/main.html')
    //     .then(res => {
    //         console.log(res)
    //         content.innerHTML = res.data
    //     })
    //     .catch(() => {
    //         content.innerHTML = 'Not found'
    //         // console.log(error)
    //     })
    //     .finally(() => {
    //         console.log('finally')
    //     })

    // $.ajax('pages/main.html')
    // $.ajax({
    //     url: 'pages/main.html',
    //     type: 'GET',
    //     // success: function(data) {
    //     //     console.log(data);
    //     //     $('#content').html(data)
    //     // },
    //     // error: function(error) {
    //     //     console.log(error);
    //     //     $('#content').html('Error')
    //     // },
    //     // complete: function() {
    //     //     console.log('complete')
    //     // }
    // })
    //     // .done(function (data) {
    //     //     console.log(data);
    //     //     $('#content').html(data)
    //     // })
    //     // .fail(function () {
    //     //     $('#content').html('Error')
    //     // })
    //     // .always(function () {
    //     //     console.log("complete");
    //     // });

    // $.post()
    // $.get('pages/main.html', responce => $('#content').html(responce))
        // .done(function() {
        //     console.log('text')
        // })
        // .always(function() {
        //     console.log('always text')
        // })


    // let xhrNext = new XMLHttpRequest,
    //     requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

    // xhrNext.open('GET', requestURL)
    // xhrNext.responseType = 'json';
    // xhrNext.send()

    // xhrNext.onreadystatechange = function () {
    //     if (xhrNext.readyState === 4) {
    //         let jsonObjectValue = JSON.stringify(xhrNext.response)
    //         console.log(xhrNext.response)
    //         console.log(jsonObjectValue)
    //         console.log(JSON.parse(jsonObjectValue))
    //     }
    // }

// }


document.addEventListener('DOMContentLoaded', () => {
    axios({
        url: 'assets/menu.json',
        responseType: 'json'
    })
        .then(response => {
            let menu = document.getElementById('menu'),
                str = '';
            
            for(let i = 0; i < response.data.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = `<a class="menu__link" href="${response.data[i].url}">
                    ${response.data[i].name}</a>`;
               
                // todo: think about it!
                menu.append(li)
            }
            
            let links = document.querySelectorAll('.menu__link');
            if(links.length) {
                loadPage(links[0].getAttribute('href'))

                for(let i = 0; i < links.length; i++) {
                    links[i].addEventListener('click', (event) => {
                        event.preventDefault();

                        loadPage(event.target.href)
                    })
                }
            }
        })
})

function loadPage(url) {
    axios(url)
        .then(res => {
            let content = document.getElementById('content')
            content.innerHTML = res.data
        })
}