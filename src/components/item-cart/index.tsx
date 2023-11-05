import { CartItemProps } from "@/interfaces/cart";
import {
  CardContainer,
  CardInfoWrapper,
  CloseButton,
  FirstInfo,
  ProductName,
  ProductValue,
} from "./style";
import Image from "next/image";
import formattedValue from "@/hooks/formattedValue";
import QuantityInput from "../cart-quantity-input";
import { useAppContext } from "@/context/globalContext";

const CartItem = ({ product }: CartItemProps) => {
  const { removeProduct } = useAppContext();

  return (
    <CardContainer>
      <CloseButton
        data-testid="button-remove"
        data-product-id={product.id}
        onClick={() => removeProduct(product.id as number)}
      >
        X
      </CloseButton>

      <CardInfoWrapper>
        <FirstInfo>
          <Image
            src={product?.photo as string}
            alt={`Imagem do produto ${product.name} no carrinho`}
            width={60}
            height={60}
          />

          <ProductName>{product.name}</ProductName>
        </FirstInfo>

        <QuantityInput id={product.id} />

        <ProductValue>{formattedValue(product.price)}</ProductValue>
      </CardInfoWrapper>
    </CardContainer>
  );
};

export default CartItem;
