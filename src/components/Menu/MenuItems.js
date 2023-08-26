import React, { useEffect, useState } from 'react'

const MenuItems = props => {
  const [menuItems, setMenuItems] = useState([]);

  const getMenuItems = () => {
    fetch(`${props.backendDomain}/api/menu`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
      setMenuItems(data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const menuConstructor = menuObject => {
    return (
      <div key={menuObject.id}>
        <p>{menuObject.title}</p>
        <p>{menuObject.description}</p>
        <p>{menuObject.price}</p>
        <p>{menuObject.category}</p>
      </div>
    );
  }

  useEffect(() => {
    getMenuItems()
  }, []);

  return (
    <section id='menu-items' className='bg-white text-black'>
      <div className='super-container'>
        {menuItems.map(menuItem => menuConstructor(menuItem))}
      </div>
    </section>
  );
}

export default MenuItems;
