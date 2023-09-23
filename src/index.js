import './style.css';
// import printMe from './home.js';
// import printMe from './menu.js';
// import printMe from './contact.js';
import headerGenerate from './app.js';


const content =document.getElementById('content')

content.appendChild(headerGenerate())

