import './style.css';
// import printMe from './home.js';
// import printMe from './menu.js';
// import printMe from './contact.js';
import {headerGenerate, footerGenerate} from './app.js';


const content =document.getElementById('content')
const main =document.createElement('div')
main.classList.add('main')

content.appendChild(headerGenerate())
content.appendChild(main)
content.appendChild(footerGenerate())

