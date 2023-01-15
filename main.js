let btn = document.getElementById('btn')
let block = document.getElementById('color')
let text = document.getElementById('text')

let colors = [
    'red',
    'blue',
    'green',
    'aqua',
    'brown'
]

let getRandomColor = () => {
    let color = '';

    color += colors[Math.floor(Math.random() * colors.length)]
    return color
}

btn.addEventListener('click', () => {
    let current = getRandomColor()
    text.textContent = current;
    block.style.border = 'none'
    block.style.backgroundColor = current;
})


