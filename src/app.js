import './style.css';

function headerGenerate() {
    const header = document.createElement('div');
    const logo = document.createElement('h1');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    logo.innerHTML = 'Restaurant Page';
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    header.classList.add('header');
    ul.classList.add('headerList')
    home.classList.add('headerListItem')
    menu.classList.add('headerListItem')
    contact.classList.add('headerListItem')

    home.addEventListener('click', (e) => {
        console.log(e.target);
    })
    menu.addEventListener('click', (e) => {
        console.log(e.target);
    })
    contact.addEventListener('click', (e) => {
        console.log(e.target);
    })

    ul.appendChild(home)
    ul.appendChild(menu)
    ul.appendChild(contact)
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
    link.href='https://github.com/hadihaz'


    footer.classList.add('footer')
    p.classList.add('footerContent')
    link.classList.add('footerLink')

    p.appendChild(link);
    footer.appendChild(p);
    return footer;

}



export  {headerGenerate, footerGenerate};
