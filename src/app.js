import './style.css';


function headerGenerate() {
    const header = document.createElement('div');
    const logo = document.createElement('h1');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    logo.innerHTML = 'Odin Restaurant';
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    header.classList.add('header');
    ul.classList.add('headerList');
    home.classList.add('headerListItem');
    home.classList.add('headerListHome');
    home.classList.add('selected');
    menu.classList.add('headerListItem');
    menu.classList.add('headerListMenu');
    contact.classList.add('headerListItem');
    contact.classList.add('headerListContact');

    home.addEventListener('click', (e) => {
        document.querySelector('.home').classList.remove('deActive');
        document.querySelector('.home').classList.add('active');
        document.querySelector('.menu').classList.add('deActive');
        document.querySelector('.contact').classList.add('deActive');

        home.classList.add('selected');
        menu.classList.remove('selected');
        contact.classList.remove('selected');
    })
    menu.addEventListener('click', (e) => {
        document.querySelector('.home').classList.add('deActive');
        document.querySelector('.menu').classList.remove('deActive');
        document.querySelector('.menu').classList.add('active');
        document.querySelector('.contact').classList.add('deActive');

        home.classList.remove('selected');
        menu.classList.add('selected');
        contact.classList.remove('selected');
    })
    contact.addEventListener('click', (e) => {
        document.querySelector('.home').classList.add('deActive');
        document.querySelector('.menu').classList.add('deActive');
        document.querySelector('.contact').classList.remove('deActive');
        document.querySelector('.contact').classList.add('active');

        home.classList.remove('selected');
        menu.classList.remove('selected');
        contact.classList.add('selected');
    })

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    header.appendChild(logo);
    header.appendChild(ul);

    return header;
}

function footerGenerate() {
    const footer = document.createElement('div');
    const p= document.createElement('p');
    const link= document.createElement('a');

    p.innerHTML='Copyright © 2023';
    link.innerHTML=' Hadihaz';
    link.href='https://github.com/hadihaz';


    footer.classList.add('footer');
    p.classList.add('footerContent');
    link.classList.add('footerLink');

    p.appendChild(link);
    footer.appendChild(p);
    return footer;

}

export  {headerGenerate, footerGenerate};
