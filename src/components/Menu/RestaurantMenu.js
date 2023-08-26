import React, { useEffect } from 'react'
import MenuItems from './MenuItems';
import MenuHero from './MenuHero';

const RestaurantMenu = props => {
  return (
    <>
      <MenuHero />
      <MenuItems backendDomain={props.backendDomain} />
    </>
  );
}

export default RestaurantMenu;
