import './style.css';
// import printMe from './home.js';
// import printMe from './menu.js';


console.log("test...!");
const content =document.getElementById('content')
const btn=document.createElement('button')
btn.onclick=printMe;
content.appendChild(btn)
