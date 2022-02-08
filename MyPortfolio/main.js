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