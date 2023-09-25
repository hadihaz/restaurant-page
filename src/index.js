import './style.css';
import homeGenerate from './home.js';
import menuGenerate from './menu.js';
import contactGenerate from './contact.js';
import {headerGenerate, footerGenerate} from './app.js';


const content =document.getElementById('content');
const main =document.createElement('div');
main.classList.add('main');

main.appendChild(homeGenerate());
main.appendChild(menuGenerate());
main.appendChild(contactGenerate());



content.appendChild(headerGenerate());
content.appendChild(main);
content.appendChild(footerGenerate());

