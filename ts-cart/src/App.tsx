import { useState } from "react";
import { useQuery } from "react-query";
import Item from './components/Item';
import Cart from './components/Cart';
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// styles
import { Wrapper, StyledButton } from "./App.styles";

// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]): number => {
    return items.reduce((acc: number, cur) => acc + cur.amount, 0);
  };
  const handleAddToCart = (newItem: CartItemType) => {
    setCart(prev => {
      const isExisting = prev.find(item => item.id === newItem.id);
      if (isExisting) {
        return prev.map(item => (
          item.id === newItem.id 
          ? {...item, amount: item.amount + 1 }
          : item
        ))
      }
      return [...prev, {...newItem, amount: 1}]
    })
  };
  const handleRemoveFromCart = (id: number) => {
    setCart(prev => (
      prev.reduce((list, item) => {
        if (id === item.id) {
          if (item.amount === 1) return list;
          return [...list, {...item, amount: item.amount - 1}]
        }
        else {
          return [...list, item]
        }
      }, [] as CartItemType[])
    ))
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something you want isn't here...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart cartItems={cart} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cart)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (<Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>))}
      </Grid>
    </Wrapper>
  )
}

export default App;
