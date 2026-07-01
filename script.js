
const boxes=document.querySelectorAll('.box');
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        const color = box.innerHTML;
        box.style.backgroundColor=color
        box.style.color=color
        box.style.border=color
    })
})

const greeting = document.getElementById('greeting')
const nameInput = document.getElementById('name')
const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    const name =nameInput.value;
    greeting.innerText=`Hello, ${name}`
})

