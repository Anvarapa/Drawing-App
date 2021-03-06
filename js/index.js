const canvas = document.querySelector('#canvas');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const sizeEl = document.querySelector('#size');
const colorEl = document.querySelector('#color');
const clearEl = document.querySelector('#clear');
const brash = document.querySelector('.brash')
const brashSize = document.querySelector('.brashSize')

const ctx = canvas.getContext('2d');

let size = 5
let isPressed = false
let color = 'black'
let x
let y
let br = 0
let piN = 2

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    console.log(isPressed, x, y);
})
canvas.addEventListener('mouseup', (e)=>{
    isPressed = false
    x = undefined
    y = undefined
    console.log(isPressed, x, y);
})
canvas.addEventListener('mousemove', (e)=>{
   if(isPressed){
       const x2 = e.offsetX
       const y2 = e.offsetY
       drawCircle(x2, y2)
       drawLine(x, y, x2, y2)
       x = x2
       y = y2
   }
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,br,Math.PI*piN);
    ctx.fillStyle = color
    ctx.fill()
} 
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen(){
    sizeEl.innerText = size
    brashSize.innerText = br
}

increaseBtn.addEventListener('click',()=>{
    size +=5
    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click',()=>{
    size -=5
    if(size < 5){
        size = 5
    }
    updateSizeOnScreen()
})

clearEl.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    br = 0
    piN = 2
    size = 5
    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e)=>{
    color = e.target.value
})
brash.addEventListener('click', ()=>{
br += 10
piN += 2
updateSizeOnScreen()
})
