import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../src/app/page";
import { useAppContext } from "../src/context/globalContext";
import Providers from "@/hooks/providers";
import { useQuery } from "react-query";
import { Product } from "@/interfaces/cart";
import HeaderComponent from "@/components/header";

interface RenderArgs {
  cart: any[]; // Substitua any pelo tipo correto do seu carrinho
  isLoading: boolean;
}

interface QueryData {
  products: Product[];
}

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: jest.fn(),
}));

const TestComponent = ({ onRender }: any) => {
  const { cart, isLoading } = useAppContext();

  onRender({ cart, isLoading });

  return <Home />;
};

const CartComponent = ({ onRender }: any) => {
  const { cart, isLoading } = useAppContext();
  onRender({ cart, isLoading });
  return <HeaderComponent />;
};

it("Adicionar item ao carrinho", async () => {
  let testCart: any[] = [],
    testIsLoading: boolean;

  const handleRender = ({ cart, isLoading }: RenderArgs) => {
    testCart = cart;
    testIsLoading = isLoading;
  };

  (useQuery as jest.Mock).mockImplementation(() => ({
    isLoading: false,
    data: {
      products: [
        {
          id: 1,
          name: "Produto 1",
          brand: "Apple",
          description: "Produto 1 para teste",
          price: 100,
        },
        {
          id: 2,
          name: "Produto 2",
          brand: "Android",
          description: "Produto 2 para teste",
          price: 200,
        },
      ],
    },
  }));

  render(
    <Providers>
      <TestComponent onRender={handleRender} />
    </Providers>
  );

  const allBuyButtons = screen.getAllByTestId("button-buy");

  const myElem = allBuyButtons[0];

  const productId = myElem.getAttribute("data-product-id");

  await waitFor(() => expect(testIsLoading).toBe(false));

  fireEvent.click(myElem);

  const isItemInCart = testCart.some(
    (item) => (item.id as number) === Number(productId)
  );
  expect(isItemInCart).toBe(true);
});

it("Remover item do carrinho", async () => {
  let testCart: any[] = [],
    testIsLoading: boolean;

  const handleRender = ({ cart, isLoading }: RenderArgs) => {
    testCart = cart;
    testIsLoading = isLoading;
  };

  (useQuery as jest.Mock).mockImplementation(() => ({
    isLoading: false,
    data: {
      products: [
        {
          id: 1,
          name: "Produto 1",
          brand: "Apple",
          description: "Produto 1 para teste",
          price: 100,
          quantity: 1,
          photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
        },
        {
          id: 2,
          name: "Produto 2",
          brand: "Android",
          description: "Produto 2 para teste",
          price: 200,
          quantity: 1,
          photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
        },
      ] as Product[],
    } as QueryData,
  }));

  render(
    <Providers>
      <CartComponent onRender={handleRender} />
    </Providers>
  );

  const allRemoveButtons = screen.getAllByTestId("button-remove-cart");

  const myElem = allRemoveButtons[0];

  const productId = myElem.getAttribute("data-product-id");

  await waitFor(() => expect(testIsLoading).toBe(false));

  fireEvent.click(myElem);

  const isItemInCart = testCart.some(
    (item) => (item.id as number) === Number(productId)
  );
  expect(isItemInCart).toBe(false);
});

