const navItems = document.querySelector('.nav-items');
const heroNav = document.querySelector('.heronav');
const brandName = document.querySelector('.brand-name');

window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    const headerHeight = document.documentElement.clientHeight * 0.80;
    const headerBottomHeight = headerHeight - 154;

    if (scroll > headerBottomHeight && scroll < headerHeight) {
        navItems.classList.add('removeNav');
    }
    else {
        navItems.classList.remove('removeNav');
    }

    if (scroll > headerHeight) {
        heroNav.classList.add('newHeroNav');
    } else {
        heroNav.classList.remove('newHeroNav');
    }

    if (scroll > 100 && scroll < headerHeight) {
        brandName.classList.add("newBrandName");
    } else {
        brandName.classList.remove("newBrandName");
    }
}