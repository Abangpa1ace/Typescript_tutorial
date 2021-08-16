import React from 'react'
import CartItem from './CartItem';
import { CartItemType  } from '../App';
import { Wrapper } from '../styles/Cart.styles';

type Props = {
  cartItems: CartItemType[],
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const getTotal = (items: CartItemType[]) => {
    return items.reduce((acc, cur) => acc + (cur.amount * cur.price), 0)
  }
  
  return (
    <Wrapper>
      <h2>My Shopping Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}
      {cartItems.map((item) => {
        const { id } = item;
        return (
          <CartItem 
            key={id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )
      })}
      <h2>Total Price: ${getTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart;
