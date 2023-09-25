import './style.css';
let foods = [
  { name: "Thickburger", price: "10$  ", description: "Hardee's Thickburgers are massive Black Angus beef burgers, piled with all the traditional fixings. You can order it in 1/4 pound, 1/3 pound, and 3/4 pound iterations, but the 1/3 pound Original is the most popular." },
  { name: "Wendy's Baked Potato", price: "10$", description: "Wendy's is the only fast-food company in the U.S. that sells baked potatoes, which is surprising because America is traditionally a meat-and-potatoes kind of place. It likely owes part of its success to that novelty." },
  { name: "Subway Cookies", price: "10$", description: "When you've chosen a healthier lunch (at least compared to the other fast-food options available), it feels perfectly valid to treat yourself to a little dessert. Perhaps that's why Subway cookies are so popular." },
  { name: "Panera Flatbreads", price: "10$", description: "Panera started offering flatbread pizzas during the pandemic, and they've quickly become a fan-favorite menu option." },
  { name: "Popeyes Biscuits", price: "10$", description: "Few fast food items have inspired more copycat recipes than the Popeyes Biscuits. They're delicious and pretty simple to make!" },
]
console.log(foods[0].name);
function menuGenerate() {
  const menu = document.createElement('div');
  for (let food of foods) {
    const item = document.createElement('div')
    const header = document.createElement('div')
    const body = document.createElement('div')
    const name = document.createElement('div')
    const price = document.createElement('div')
    const description = document.createElement('div')

    name.innerHTML = food.name
    price.innerHTML = food.price
    description.innerHTML = food.description

    item.classList.add('food')
    header.classList.add('foodHeader')
    body.classList.add('foodBody')
    price.classList.add('foodPrice')


    header.appendChild(name)
    header.appendChild(price)
    body.appendChild(description)
    item.appendChild(header)
    item.appendChild(body)
    menu.appendChild(item)
  }

  menu.classList.add('menu')
  menu.classList.add('deActive')

  return menu;
}

export default menuGenerate;