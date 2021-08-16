import React from 'react';
import { Button } from "@material-ui/core";
import { CartItemType } from '../App';
import { Wrapper } from '../styles/CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { id, title, price, amount, image } = item;

  return (
    <Wrapper>
      <div>
        <h3>{title}</h3>
        <div className="information">
          <p>Price: ${price}</p>
          <p>Total: ${(amount * price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button 
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(id)}
          >-</Button>
          <p>{amount}</p>
          <Button 
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >+</Button>
        </div>
      </div>
      <img src={image} alt={`cart-img-${title}`} />
    </Wrapper>
  )
}

export default CartItem
