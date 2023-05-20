import React from 'react';
import Hearder from './components/Layout/Hearder';
import Meals from './components/Meals/Meals';
import Card from './components/UI/Card';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider"


function App() {
  const [cartIshown, setCardIsShown] = React.useState(false)

  const handleShown = () => {
    setCardIsShown(!cartIshown)
  }

  return (
    <CartProvider>
      { cartIshown && <Cart onHandleShown={handleShown}/>}
      <Hearder  onHandleShown={handleShown} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
