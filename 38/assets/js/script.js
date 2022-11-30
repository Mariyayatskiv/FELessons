function deleteCookie(name) {
    setCookie(name, "", 0)
}

function setCookie(name, value, days) {
    let expires = '';

    if(days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000))
        expires = '; expires=' + date.toUTCString()
    } else {
        expires = '; expires=Thu, 01 Jan 1900 00:00:01 GTM;'
    }

    document.cookie = name+"="+value+expires+"; path=/"
}

function getCookie(name) {
    let cookieValue = document.cookie.split(';');
    let nameTemplate = name + '=';

    for(let i = 0; i < cookieValue.length; i++) {
        let cookieValueItem = cookieValue[i];
        
        while(cookieValueItem.charAt(0) === ' ') {
            cookieValueItem = cookieValueItem.substring(1, cookieValueItem.length)
        }
        
//         let splittedValue = cookieValueItem.split('=');
// console.log(splittedValue)
//         if(splittedValue[0] === name) {
//             return splittedValue[1]
//         }

        if(cookieValueItem.indexOf(nameTemplate) === 0) {
            return cookieValueItem.substring(nameTemplate.length, cookieValueItem.length)
        }
    }

    return null
}

// console.log(getCookie('test2'))
// setCookie('test', '123', 2)
// setCookie('test1', '321', 1)
// setCookie('test2', '444', 1)

localStorage.setItem('test', "123")
// console.log(localStorage.getItem('test1'))
// console.log(localStorage)


// console.log(localStorage.test)
// delete localStorage.test

// localStorage.removeItem('test')

for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(localStorage.getItem(key))
}

console.log(sessionStorage)