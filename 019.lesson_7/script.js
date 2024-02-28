const text = document.querySelector('.text');
const boo = document.querySelector('.ghost');

let timeoutId;

text.addEventListener('mouseenter', () => {
    boo.classList.add('boo'); 
});

text.addEventListener('mouseleave', () => {    
    timeoutId = setTimeout(() => {
        boo.classList.remove('boo');
    }, 100);
});
