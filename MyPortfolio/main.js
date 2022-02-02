// const navItems = document.querySelector('.nav-items');
const heroNav = document.querySelector('.heronav');
// const brandName = document.querySelector('.brand-name');
// const navbarToggler = document.querySelector('.button-nav').getAttribute('aria-expanded').valueOf();
// const toggling = document.querySelector('.toggling');
//  const show = document.querySelector('.show');


window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    const headerHeight = document.documentElement.clientHeight * 0.80;
    // const headerBottomHeight = headerHeight + 50;

    if (scroll > headerHeight) {
        heroNav.classList.add('newHeroNav');
    } else {
        heroNav.classList.remove('newHeroNav');
    }

    if (scroll > 80 && scroll < headerHeight) {
        heroNav.classList.add('removeNav');
        // brandName.classList.add("newBrandName");
        // navbarToggler.classList.add("button-nav");
    } else {
        heroNav.classList.remove('removeNav');
        // brandName.classList.remove("newBrandName");
        // navbarToggler.classList.remove("button-nav");
    }
}

// navItems.style("padding-left: 0");
// if(toggling.getAttribute('class').valueOf() == 'show'){
//     toggling.classList.add('toggleButton')
// }else{
//     toggling.classList.remove('toggleButton');
// }