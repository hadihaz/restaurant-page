import './style.css';

function contactGenerate(){
  const contact=document.createElement('div');
  contact.innerHTML="contact"
  contact.classList.add('contact')
  contact.classList.add('deActive')


  return contact;
}




export default contactGenerate;