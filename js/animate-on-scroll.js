const list_items = document.querySelectorAll(".slider-bar");


// Checks if is in viewport -----------------------------------------------
const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


// If in viewport add class -----------------------------------------------
const run = () => list_items.forEach(i => {
    if(isInViewport(i)){
        i.classList.add("slider-animate-class")
    }
});


// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);