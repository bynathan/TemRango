// SCRIPT NAVBAR

const navbarInfosOptions = document.querySelectorAll('.navbar-infos-options');

navbarInfosOptions[0].addEventListener('click', () => {
    navbarInfosOptions[0].classList.add('selected')
    navbarInfosOptions[1].classList.remove('selected')
    navbarInfosOptions[2].classList.remove('selected')
})

navbarInfosOptions[1].addEventListener('click', () => {
    navbarInfosOptions[1].classList.add('selected');
    navbarInfosOptions[0].classList.remove('selected');
    navbarInfosOptions[2].classList.remove('selected');
});

navbarInfosOptions[2].addEventListener('click', () => {
    navbarInfosOptions[2].classList.add('selected');
    navbarInfosOptions[1].classList.remove('selected');
    navbarInfosOptions[0].classList.remove('selected');
});

// EVENTLISTENER CARDS

const card = document.querySelectorAll('.card');
const cardButton = document.querySelectorAll('.card-button');

cardButton[0].addEventListener('mouseenter', () => {
    card[0].classList.add('card-selected');
    card[3].classList.remove('card-selected');
    card[2].classList.remove('card-selected');
    card[1].classList.remove('card-selected');
});

cardButton[1].addEventListener('mouseenter', () => {
    card[1].classList.add('card-selected');
    card[3].classList.remove('card-selected');
    card[2].classList.remove('card-selected');
    card[0].classList.remove('card-selected');
});

cardButton[2].addEventListener('mouseenter', () => {
    card[2].classList.add('card-selected');
    card[3].classList.remove('card-selected');
    card[1].classList.remove('card-selected');
    card[0].classList.remove('card-selected');
});

cardButton[3].addEventListener('mouseenter',() => {
    card[3].classList.add('card-selected');
    card[2].classList.remove('card-selected');
    card[1].classList.remove('card-selected');
    card[0].classList.remove('card-selected');
});

cardButton.forEach((i) => {

    i.addEventListener('mouseleave', () => {
    card[3].classList.remove('card-selected');
    card[2].classList.remove('card-selected');
    card[1].classList.remove('card-selected');
    card[0].classList.remove('card-selected');
    })
})