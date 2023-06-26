let menu = document.querySelector('.menu');
let items = document.querySelectorAll('.menu-item');
let clones = [];
let disableScroll = false;
let scrollHeight = 0;
let scrollPos = 0;
let clonesHeight = 0;

function getScrollPos() {
    return menu. scrollTop;
}

function setScrollPos(pos) {
    menu.scrollTop = pos;
}

function getClonesHeight() {
    clonesHeight = 0;
    
    clones.forEach(clone => {
        clonesHeight += clone.offsetHeight;
    })
    
    return clonesHeight;
}

function reCalc() {
    scrollPos = getScrollPos();
    scrollHeight = menu.scrollHeight;
    clonesHeight = getClonesHeight();
    
    if(scrollPos <= 0) {
        setScrollPos(1);
    }
}

function scrollUpdate() {
    if(!disableScroll) {
        scrollPos = getScrollPos();
        if(clonesHeight + scrollPos >= scrollHeight) {
            setScrollPos(1);
            disableScroll = true;
        }
        else if (scrollPos <= 0) {
            setScrollPos(scrollHeight - clonesHeight);
            disableScroll = true;
        }
    }
    
    if(disableScroll) {
        window.setTimeout(() => {
            disableScroll = false;
        }, 40);
    }
}

function onLoad(){
    items.forEach(item => {
        const clone = item.cloneNode(true);
        menu.appendChild(clone);
        clone.classList.add('js-clone');
    });
    
    clones = menu.querySelectorAll('.js-clone');
    
    reCalc();
    
    menu.addEventListener('scroll', () => {
        window.requestAnimationFrame(scrollUpdate);
    }, false);
    
    window.addEventListener('resize', () => {
        window.requestAnimationFrame(reCalc);
    }, false);
}

window.onload = onLoad();
