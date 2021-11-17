window.onload = function name(params) {
    
    let leftSk = document.querySelector('.leftSk');
    let rightSk = document.querySelector('.rightSk');
    let scrollerImage = document.querySelector('.imageSkroller');
let num  = 0;

rightSk.onclick = (prom => {
    num = num + 500;
    if (num == 2000) {
        num = 0;
    };
    scrollerImage.style.left = -num + 'px';
});
leftSk.onclick = (prom => {
    num = num -500;
    if (num < 0) {
        num = 1500;
    };
    scrollerImage.style.left = -num + 'px';
});

let coffeContent = document.querySelector('.coffeContent');
let numTwo = 0;
function coffeScr() {
    numTwo = numTwo + 240;
    if (numTwo >= 1100) {
        numTwo = 0;
    }
    coffeContent.style.left = -numTwo + 'px';
}
setInterval(coffeScr, 5000)
}

