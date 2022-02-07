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

// const btn = document.querySelector('#btn');
// const contactForm = document.querySelector('#contact-form')
// btn.addEventListener('click',() => {
//     Email.send({
//         // SecureToken: "e2fe9551-70c3-4cc7-8881-14b6ec60d311",
//         Host: "smtp.gmail.com",
//         UserName: "famousks232@gmail.com",
//         Password: "A04892C1F1FE5558BE60C37511BCC887C287",
//         To : "shubh6441@gmail.com",
//         From : document.querySelector("#email").value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// })

// const sendEmail = () => {
//     Email.send({
//                 // SecureToken: "e2fe9551-70c3-4cc7-8881-14b6ec60d311",
//                 Host: "smtp.gmail.com",
//                 UserName: "famousks232@gmail.com",
//                 Password: "A04892C1F1FE5558BE60C37511BCC887C287",
//                 To : "shubh6441@gmail.com",
//                 From : contactForm.elements[email].value,
//                 Subject : "This is the subject",
//                 Body : "And this is the body"
//             }).then(
//               message => alert(message)
//             );
        
// }