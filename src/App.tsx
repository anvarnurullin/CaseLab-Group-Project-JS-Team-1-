import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import ShaurmaCheck from './ShaurmaCheck.png';
import { Product } from './typescript/main';

function App() {

  const ShaurmaCheckObject:Product = {
    title: 'Шаурма 4 сыра',
    weight: 390,
    price: 299,
    type: 'shawarma',
    promo: true,
    ingredients: null
  }

  return (
    <div className="App">
      <ProductCard image={ShaurmaCheck} product={ShaurmaCheckObject} />
    </div>
  );
}

export default App;
