let but = document.querySelector('.but')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal-close')
let modalBut = document.querySelector('.modal-but')
let p = document.querySelector('.modal-text')
let modalRandom = document.querySelector('.modal-random')

but.addEventListener('click', () => {
    modal.classList.remove('none')
})

close.addEventListener('click', () => {
    modal.classList.add('none')
})

modalBut.addEventListener('click', () => {
    p.textContent = p.textContent ? '' : 'like'
})

modalRandom.addEventListener('click', () => {
    let x = Math.floor(Math.random() * window.innerWidth)
    let y = Math.floor(Math.random() * window.innerHeight)
    modal.style.position = 'absolute'
    modal.style.top = `${y}px`
    modal.style.left = `${x}px`
})




let select = document.querySelector('.select')
let text = document.querySelectorAll('.text')
let resultBut = document.querySelector('.result-but')

let results = {
    you: 0,
    computer: 0,
    n: 0
}


resultBut.addEventListener('click', () => {
    let comp = Math.floor(Math.random() * 3);

    if (arr[comp] == 'stone' && select.value != 'stone') {
        if (select.value == 'scissors') {
            results.computer++;
        } else {
            results.you++;
        }
    } 
    else if (arr[comp] == 'scissors' && select.value != 'scissors') {
        if (select.value == 'stone') {
            results.you++;
        } else {
            results.computer++;
        }
    }
    else if (arr[comp] == 'paper' && select.value != 'paper') {
        if (select.value == 'scissors') {
            results.you++;
        } else {
            results.computer++;
        }
    }
    else {
        results.n++;
    }

    text[0].textContent = results.you;
    text[1].textContent = results.computer;
    text[2].textContent = results.n;
});













// let arr = ['crcds', 'dewd', 'grtg', 'brtbfrg', 'pkopae']
// console.log(arr.sort());

// let arr2 = [
//     {skill: 'crcds'},
//     {skill: 'dewd'},
//     {skill: 'grtg'},
//     {skill: 'brtbfrg'},
//     {skill: 'pkopae'},
// ]
// let a = arr2.sort()
// console.log(a.map(b => b.skill));

// let a = ["h","o","l","a"]
// console.log(a.join(','))

// let b = 'dnjind h jn  cnoenc     '.split(' ')
// console.log(b);

// for (const i of b) {
//     if (i.length > 2) {
//         i[0].toUpperCase()
//         console.log(i);
//     }
// }