const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function (){
    alert('en verdad? :O soy feliz¡¡')
});

const nouBtn  = document.querySelector('#nouBtn');
 nouBtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nouBtn.style.setProperty('top',randomY+'%');
    nouBtn.style.setProperty('letf',randomX+'%');
    nouBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
 });