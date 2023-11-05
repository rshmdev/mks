"use client";

import { CartButton, HeaderNav, HeaderWrapper, LogoH1 } from "./style";

import cartIcon from "../../../public/cart-icon.svg";
import Image from "next/image";
import { useAppContext } from "@/context/globalContext";
import Cart from "../cart";

const HeaderComponent = () => {
  const { cart, cartOpen, setCartOpen } = useAppContext();

  return (
    <HeaderWrapper>
      <HeaderNav>
        <LogoH1>
          MKS <span>sistemas</span>
        </LogoH1>

        <CartButton
          data-testid="button-remove-cart"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <Image
            src={cartIcon}
            width={17}
            alt="imagem de um carrinho dentro do botão que abre a vizualição do carrinho"
          />

          <span>{cart.length ? cart.length : 0}</span>
        </CartButton>
      </HeaderNav>
      <Cart />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
