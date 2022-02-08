const heroNav = document.querySelector('.heronav');

window.onload = () => {
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    const headerHeight = document.documentElement.clientHeight * 0.80;

    if (scroll > headerHeight) {
        heroNav.classList.add('newHeroNav');
    } else {
        heroNav.classList.remove('newHeroNav');
    }

    if (scroll > 80 && scroll < headerHeight) {
        heroNav.classList.add('removeNav');
    } else {
        heroNav.classList.remove('removeNav');
    }
}
}

const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    const sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".heronav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".heronav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
