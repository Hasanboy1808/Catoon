let tn = document.getElementsByClassName('btn10')[0],
    modal = document.getElementsByClassName('contact')[0],
    x = document.getElementById('x'),
    navburger = document.getElementsByClassName('menu380px')[0],
    menubar = document.getElementsByClassName('navburger')[0],
    span = document.getElementsByClassName('span')[0]
    console.log(span);



tn.addEventListener('click',function () {
    modal.style.display = 'block'
})

x.addEventListener('click', function(){
    modal.style.display = 'none'
    menubar.style.display = 'none'
})



navburger.addEventListener('click',function () {
    menubar.style.display = 'block'
    
})
