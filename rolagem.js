
/*Scroll*/ 
/*Otimizar o código*/
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout (timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context,args);
    };
};
/**------------------------------------------------------------------- */

const target = document.querySelectorAll("[data-anime]");
const animacaoClass = "animate";

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/3.8);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animacaoClass);
        } else {
            element.classList.remove(animacaoClass);
        }
    })
}
animeScroll();

if(target.length){
    window.addEventListener("scroll", debounce( function(){
        animeScroll();
    }, 100));
}