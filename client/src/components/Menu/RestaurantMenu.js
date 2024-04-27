import React, { useEffect, useState } from 'react'
import './RestaurantMenu.css'

const RestaurantMenu = props => {
  const [appetizerSelected, setAppetizerSelected] = useState(true);
  const [mainSelected, setMainSelected] = useState(true);
  const [dessertSelected, setDessertSelected] = useState(true);
  const [drinkSelected, setDrinkSelected] = useState(true);
  const [lowToHigh, setLowToHigh] = useState(true);
  const [highToLow, setHighToLow] = useState(!lowToHigh);
  const [menu, setMenu] = useState([]);

  const getMenu = () => {
    fetch(`${props.backendDomain}/api/menu`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => setMenu(data))
    .catch(err => {
      console.log(err);
    });
  }

  const menuConstructor = menuObject => {
    return (
      <article className='grid-container menu-item' key={menuObject.id}>
        <div className='menu-image' >
          <img src={`./images/${menuObject.title.replace(/\s+/g, '-').toLowerCase()}.jpg`}></img>
        </div>
        <div className='flex-container menu-detail'>
          <div className='flex-container menu-heading'>
            <h3 className='menu-title'>{menuObject.title}</h3>
            <span className='menu-price text-orange'>${menuObject.price}</span>
          </div>
          <div className='menu-description paragraph-text'>
            <p>{menuObject.description}</p>
          </div>
        </div>
      </article>
    );
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <section id='menu-items' className='bg-white text-black'>
      <div className='super-container'>
        <div className='menu-control-filter'>
          <button className={`button menu-filter-button bg-white text-green ${appetizerSelected && 'selected'}`} 
            onClick={() => setAppetizerSelected(!appetizerSelected)}
          >
            Appetizers
          </button>
          <button className={`button menu-filter-button bg-white text-green ${mainSelected && 'selected'}`} 
            onClick={() => setMainSelected(!mainSelected)}
          >
            Mains
          </button>
          <button className={`button menu-filter-button bg-white text-green ${dessertSelected && 'selected'}`} 
            onClick={() => setDessertSelected(!dessertSelected)}
          >
            Desserts
          </button>
          <button className={`button menu-filter-button bg-white text-green ${drinkSelected && 'selected'}`} 
            onClick={() => setDrinkSelected(!drinkSelected)}
          >
            Drinks
          </button>
        </div>
        <div className='menu-control-order'>
          <button className={`button menu-order-button bg-white text-green ${lowToHigh && 'selected'}`} 
            onClick={() => {
              setLowToHigh(!lowToHigh);
              setHighToLow(!highToLow);
            }}
          >
            Low to High
          </button>
          <button className={`button menu-order-button bg-white text-green ${highToLow && 'selected'}`} 
            onClick={() => {
              setHighToLow(!highToLow);
              setLowToHigh(!lowToHigh);
            }}
          >
            High to Low
          </button>
        </div>
        {appetizerSelected &&
          <div className='menu-container' id='appetizer'>
            <h2 className='subtitle text-green'>Appetizers</h2>
            {lowToHigh && menu.filter(item => item.category.title === 'Appetizer').sort((a, b) => a.price - b.price).map(item => menuConstructor(item))}
            {highToLow && menu.filter(item => item.category.title === 'Appetizer').sort((a, b) => b.price - a.price).map(item => menuConstructor(item))}
          </div>
        }
        {mainSelected &&
          <div className='menu-container' id='main'>
            <h2 className='subtitle text-green'>Mains</h2>
            {lowToHigh && menu.filter(item => item.category.title === 'Main').sort((a, b) => a.price - b.price).map(item => menuConstructor(item))}
            {highToLow && menu.filter(item => item.category.title === 'Main').sort((a, b) => b.price - a.price).map(item => menuConstructor(item))}
          </div>
        }
        {dessertSelected &&
          <div className='menu-container' id='dessert'>
            <h2 className='subtitle text-green'>Desserts</h2>
            {lowToHigh && menu.filter(item => item.category.title === 'Dessert').sort((a, b) => a.price - b.price).map(item => menuConstructor(item))}
            {highToLow && menu.filter(item => item.category.title === 'Dessert').sort((a, b) => b.price - a.price).map(item => menuConstructor(item))}
          </div>
        }
        {drinkSelected &&
          <div className='menu-container' id='drink'>
            <h2 className='subtitle text-green'>Drinks</h2>
            {lowToHigh && menu.filter(item => item.category.title === 'Drink').sort((a, b) => a.price - b.price).map(item => menuConstructor(item))}
            {highToLow && menu.filter(item => item.category.title === 'Drink').sort((a, b) => b.price - a.price).map(item => menuConstructor(item))}
          </div>
        }
      </div>
    </section>
  );
}

export default RestaurantMenu;
