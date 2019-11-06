import React from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';
import Product from './Product';


let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'An old book',
    price: "$100 USD"
  },
  {
    item: 'Quantum Computing Laptop',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SL1500_.jpg',
    description: 'A computer that computes things quantumly',
    price: "$1000 USD"
  },
  {
    item: 'iPhone 111 Pro',
    image: 'https://assets.hardwarezone.com/img/2019/Fidget_Spinner_iPhone_11.jpg',
    description: 'iPhone 11 but with a fidget spinner',
    price: "$10000 USD"
  },
  {
    item: 'In N Out Combo Meal',
    image: 'http://www.in-n-out.com/mobile/images/menu_v2/double_double_meal.png',
    description: 'Delicious food from the best state in the U.S.',
    price: '$5 USD'
  },
  {
    item: 'Chipotle Bowl w/ Guac',
    image: 'https://www.chipotle.com/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/chicken/for-real/for-real-chicken-bowl@2x.png',
    description: 'The best food from the best franchise on Earth',
    price: '$11 USD'
  }
]

function App() {
  return (
    <div className="App">
      <h1>MarsBao</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map((item)=> {
        return Product(item);
      })}
    </div>
  );
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
