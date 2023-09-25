import './style.css';

function contactGenerate(){
  const contact=document.createElement('div');
  const contactHeader=document.createElement('h2');
  const phoneٔNumber=document.createElement('p');
  const address=document.createElement('p');

  contactHeader.innerHTML='contact us';
  phoneٔNumber.innerHTML='Phone Number:   0999-999-9999';
  address.innerHTML='Address:   Mars - Odin Restaurant';

  contact.classList.add('contact');
  contact.classList.add('deActive');

  contact.appendChild(contactHeader);
  contact.appendChild(phoneٔNumber);
  contact.appendChild(address);

  return contact;
}

export default contactGenerate;