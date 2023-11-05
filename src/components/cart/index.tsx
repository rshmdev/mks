import { useAppContext } from "@/context/globalContext";
import {
  CartButtonContainer,
  CartContainer,
  CartTitle,
  CartTotal,
  CloseButton,
  HeaderCart,
  ListCards,
} from "./style";
import CartItem from "../item-cart";
import formattedValue from "@/hooks/formattedValue";

const Cart = () => {
  const { cart, setCartOpen, cartOpen } = useAppContext();

  const totalValue = cart.reduce((total, product) => {
    if (product.price !== undefined && product.quantity !== undefined) {
      return total + product.price * product.quantity;
    } else {
      return total;
    }
  }, 0);

  return (
    <CartContainer cartOpen={cartOpen}>
      <HeaderCart>
        <CartTitle>Carrinho de compras</CartTitle>

        <CloseButton onClick={() => setCartOpen(!cartOpen)}>X</CloseButton>
      </HeaderCart>

      <ListCards>
        {cart.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </ListCards>

      <div>
        <CartTotal>
          <span className="total">TOTAL</span>{" "}
          <span className="total-value">{formattedValue(totalValue)}</span>
        </CartTotal>

        <CartButtonContainer>
          <h3>Finalizar compra</h3>
        </CartButtonContainer>
      </div>
    </CartContainer>
  );
};

export default Cart;
