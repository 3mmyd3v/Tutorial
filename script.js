//select elements??
const add = document.querySelector('.btn_add');
const remove = document.querySelector('.btn_remove');
const reset = document.querySelector('.btn_reset');
const input= document.querySelector('.Enter_Item');
const button = document.querySelector('.button')


//write functions//
add.addEventListener('click', ()=>{
    if(input.value.length == 0){
        alert('Input')
    }else{
    let ul = document.getElementsByTagName('ul')[0]
    let li = document.createElement('li')
    li.textContent = input.value
    ul.appendChild(li)
    input.value=''
    let button = document.createElement('button')
    button.textContent = 'remove'
    button.style.color = 'red'
    }
})
remove.addEventListener('click', ()=>{
     let ul = document.getElementsByTagName('ul')[0]
    let li = document.querySelector('li:last-child')
    ul.removeChild(li)
})
reset.addEventListener('click', ()=>{
     let ul = document.getElementsByTagName('ul')[0]
    let li = document.querySelector('li')
    ul.remove(li)
})
//call function??
