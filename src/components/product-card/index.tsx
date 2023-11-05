import Image from "next/image";
import {
  ButtonWrapper,
  BuyButton,
  ProductContainer,
  ProductDescription,
  ProductInfoWrapper,
  ProductPrice,
  ProductTitle,
} from "./style";
import formattedValue from "@/hooks/formattedValue";

import ButtonIcon from "../../../public/shopping-bag.svg";
import { Product } from "@/interfaces/cart";
import { useAppContext } from "@/context/globalContext";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useAppContext();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      photo: product.photo,
    });
  };

  return (
    <ProductContainer>
      <div>
        <Image
          priority
          src={product?.photo as string}
          alt={`Imagem do produto ${product?.name}`}
          width={140}
          height={140}
        />
      </div>

      <ProductInfoWrapper>
        <ProductTitle>
          {product.name}
          <ProductPrice>{formattedValue(product.price)}</ProductPrice>
        </ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfoWrapper>

      <ButtonWrapper>
        <BuyButton
          id="button-buy"
          data-testid="button-buy"
          data-product-id={product.id}
          onClick={handleAddToCart}
        >
          <Image
            src={ButtonIcon}
            width={14}
            height={14}
            alt="icone dentro do botão de adicionar produto ao carrinho"
          />
          Comprar
        </BuyButton>
      </ButtonWrapper>
    </ProductContainer>
  );
};

export default ProductCard;
