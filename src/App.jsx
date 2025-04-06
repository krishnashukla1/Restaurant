import React, { useContext } from 'react';
import RestaurantList from './components/RestaurentList';
import DishesMenu from './components/DishesMenu';
import Cart from './components/Cart';
import { RestaurantContext } from './contexts/RestaurentContext';
import './App.css';

const App = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);

  return (
    <div className="container">
      <h1 className="header">KP Restaurant App</h1>
      <Cart style={{ position: "absolute", right: "20px", top: "20px" }} />
      <RestaurantList />
      {selectedRestaurant && <DishesMenu />}
    </div>
  );
};

export default App;
