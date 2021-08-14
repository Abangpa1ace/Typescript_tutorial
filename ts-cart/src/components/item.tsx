import Button from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "./item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
};

const Item: React.FC
