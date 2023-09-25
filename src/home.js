import './style.css';


function homeGenerate(){
  const home=document.createElement('div');
  const p=document.createElement('p');
  const button=document.createElement('button');

  p.innerHTML='Welcome to Odin Restaurant';
  button.innerHTML='view menu';
  button.addEventListener('click',()=>{
    document.querySelector('.home').classList.add('deActive');
    document.querySelector('.menu').classList.remove('deActive');
    document.querySelector('.menu').classList.add('active');

    document.querySelector('.headerListHome').classList.remove('selected');
    document.querySelector('.headerListMenu').classList.add('selected');
  })

  home.classList.add('home');
  home.classList.add('active');
  
  home.appendChild(p);
  home.appendChild(button);

  return home;
}

export default homeGenerate;