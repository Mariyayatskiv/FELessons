// console.log(window)
// console.log(window.document)

// console.log(window.document.location.href)
// console.log(window.document.location.hash)
// console.log(window.document.location.search)

// console.log(window.document.body) - document.body
// console.log(window.document.head) - document.head

// console.log(document)

// console.log(window.navigator)
// console.log(window.navigator.userAgent)
// console.log(window.navigator.platform)
// console.log(location)

// console.log(window.document.body)
// console.log(document.body)

// console.log(window.innerHeight, window.innerWidth)
// console.log(window.outerHeight, window.outerWidth)

// console.log(document.body.childNodes[0])

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i])
// }

// let element = document.getElementById('section')
// console.log(element.getElementById('paragraph'))

// let div1 = document.getElementById('div1'),
//     div2 = document.getElementById('div2');

// if(div1) {
//     console.log(div1.innerWidth)
// } else {
//     console.log(123)
// }

// let elements = document.querySelectorAll('.section.section--big-spaces');
// console.log(elements)


// let elements = document.querySelectorAll('ul li a.link--red, .section--big-spaces a.link--red');
    // elementsFromSection = document.querySelectorAll('.section--big-spaces a.link--red');
// console.log(elements)

// console.log(document.querySelectorAll('ul li a.link--red' || '.section--big-spaces a.link--red'))
// console.log(document.querySelectorAll('ul li a.link--red' && '.section--big-spaces a.link--red'))

// let element = document.getElementById('list'),
//     links = element.querySelectorAll('a.link12'),
//     link = element.querySelector('a.link'),
//     linksArray = Array.from(links);
    
// console.log(links, linksArray)
// if(links.length)
// if(links.length > 0) {
//     // ...
// }

// if(links[0]) {
//     console.log(links[0])
// }

// links.forEach(link => console.log(link));

// for(let i = 0; i < links.length; i++) {
//     console.log(links[i], links[i].text)
// }
// linksArray.filter(el => el.tagName.toLowerCase() === 'a')

// links.sort((a, b) => a - b)

// console.log(links, Array.from(links))

// let element = document.getElementById('list');
// console.log(element.querySelectorAll('a[data-text]'))
// console.log(element.querySelectorAll('img[alt]'))

// console.log(element.getElementsByTagName('a'))

// console.log(element.getElementsByClassName('link'))

// console.log(element.getElementsByName('age'))


// let element = document.getElementById('list'),
//     link = element.querySelector('a[data-text]');

// if(link) {
//     // console.log(link.tagName.toLowerCase())
//     let parent = link.closest('li'),
//         nextEl = parent.nextElementSibling;
    // if(parent) {
    //     let li = parent.querySelectorAll('li')
    //     console.log(li)
    // }
    // console.log(parent.nextElementSibling.tagName, parent.previousElementSibling.tagName)
    // console.log(nextEl.innerHTML, nextEl.outerHTML);
    // nextEl.innerHTML = '<div class="test-div">123</div>'
    // nextEl.outerHTML = ''
    // console.log(nextEl.innerHTML, nextEl.outerHTML)
    // console.log(document.querySelector('.test-div'))

    // console.log(link.classList)

    // if(link.classList.contains('link')) {
    //     // link.classList.add('link-321')
    //     link.classList.remove('link', 'link--red')
    // } else {
    //     // link.classList.add('link-empty', 'link-empty123')
    // }
    // link.classList.toggle('link')
    // link.classList.toggle('link-123')
    // console.log(link.classList)
// }

// let content = '';

// for(let i = 0; i < 10; i++) {
//     content += '<div></div>'
// }

// let list = document.getElementById('list'),
//     firstLi = list.querySelector('li'),
//     listLi = Array.from(list.querySelectorAll('li'))
//     element = document.createElement('li');
// element.id = 'test-id'
// element.classList.add('test-class', 'test-class-2')
// element.innerHTML = 'New li'
// element.style.backgroundColor = '#423'
// element.style.color = 'white'

// list.insertBefore(element, listLi.at(-1).nextElementSiblings)
// list.append(element)
// console.log(element.style)
// console.log(firstLi.style)


// let styles = window.getComputedStyle(firstLi)

// console.log(firstLi.offsetHeight + parseInt(styles.getPropertyValue('margin-top')) + parseInt(styles.getPropertyValue('margin-bottom')))
// console.log();

let li = document.querySelector('li.li-class');

if(li) {
    li.onclick = function() {
        console.log(1234)
    }
}

