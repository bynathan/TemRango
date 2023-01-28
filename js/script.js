// ALERTA PARA O GITHUB COMENTE ESSES CODIGOS

// window.confirm('Clique em OK, para vizualizar o Projeto.')
// window.confirm('Este é o link para visualizar o diretorio do Projeto no GitHub:  https://github.com/bynathan/TemRango')

// SCRIPT NAVBAR

const navbarInfosOptions = document.querySelectorAll('.navbar-infos-options');

navbarInfosOptions[0].addEventListener('click', () => {
    navbarInfosOptions[0].classList.add('selected');
    navbarInfosOptions[1].classList.remove('selected');
    navbarInfosOptions[2].classList.remove('selected');
});

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
});

// MENU HAMBURGUER

const menuHamb = document.getElementById('menu-container');
const containerMenuHamb = document.getElementsByClassName('menu-hamb')[0];
const navbarInfos = document.getElementsByClassName('navbar-infos')[0];
const navbarButtons = document.getElementsByClassName('navbar-buttons')[0];
const navbar = document.getElementById('navbar');
const body = document.getElementById('body')
const logoMobile = document.getElementsByClassName('navbar-logo-mobile')[0]

menuHamb.addEventListener('click', () => {
    containerMenuHamb.classList.toggle('on');
    navbarButtons.classList.toggle('on');
    navbarInfos.classList.toggle('on');
    navbar.classList.toggle('on');
    body.classList.toggle('on');
    logoMobile.classList.toggle('on');
});
