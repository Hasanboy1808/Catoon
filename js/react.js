let tn = document.getElementsByClassName('btn10')[0],
    modal = document.getElementsByClassName('contact')[0],
    x = document.getElementById('x'),
    a = document.getElementById('asa'),
    a1 = document.getElementById('asa1'),
    a2 = document.getElementById('asa2'),
    a3 = document.getElementById('asa3'),
    b = document.getElementById('bsa'),
    b1 = document.getElementById('bsa1'),
    b2 = document.getElementById('bsa2'),
    b3 = document.getElementById('bsa3'),
    x1 = document.getElementById('x1'),
    navburger = document.getElementsByClassName('menu380px')[0],
    menubar = document.getElementsByClassName('navburger')[0],
    span = document.getElementsByClassName('span')[0]
    console.log(span);



tn.addEventListener('click',function () {
    modal.style.display = 'block'
})

x.addEventListener('click', function(){
    modal.style.display = 'none'
})

navburger.addEventListener('click',function () {
    menubar.style.display = 'block'
    
})
x1.addEventListener('click', function(){
    menubar.style.display = 'none'
})

asa.addEventListener('click',function(){
    asa.style.color = 'blue'
    asa1.style.color = 'white'
    asa2.style.color = 'white'
    asa3.style.color = 'white'
})
asa1.addEventListener('click',function(){
    asa.style.color = 'white'
    asa1.style.color = 'blue'
    asa2.style.color = 'white'
    asa3.style.color = 'white'
})
asa2.addEventListener('click',function(){
    asa2.style.color = 'blue'
    asa.style.color = 'white'
    asa1.style.color = 'white'
    asa3.style.color = 'white'
})
asa3.addEventListener('click',function(){
    asa.style.color = 'white'
    asa3.style.color = 'blue'
    asa1.style.color = 'white'
    asa2.style.color = 'white'
})



bsa.addEventListener('click',function(){
    bsa.style.color = 'blue'
    bsa1.style.color = 'white'
    bsa2.style.color = 'white'
    bsa3.style.color = 'white'
})
bsa1.addEventListener('click',function(){
    bsa.style.color = 'white'
    bsa1.style.color = 'blue'
    bsa2.style.color = 'white'
    bsa3.style.color = 'white'
})
bsa2.addEventListener('click',function(){
    bsa2.style.color = 'blue'
    bsa.style.color = 'white'
    bsa1.style.color = 'white'
    bsa3.style.color = 'white'
})
bsa3.addEventListener('click',function(){
    bsa.style.color = 'white'
    bsa3.style.color = 'blue'
    bsa1.style.color = 'white'
    bsa2.style.color = 'white'
})