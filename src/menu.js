import './style.css';

function menuGenerate(){
  const menu=document.createElement('div');
  menu.innerHTML="menu"
  menu.classList.add('menu')
  menu.classList.add('deActive')


  return menu;
}




export default menuGenerate;