import { useEffect } from "react";
import {
  ContainerQuantity,
  DecrementButton,
  IncrementButton,
  InputQuantity,
} from "./styles";
import { useAppContext } from "@/context/globalContext";

const QuantityInput = ({ id }: any) => {
  const {
    updateQuantity,
    getQuantity,
    removeProduct,
    handleDecrement,
    handleIncrement,
  } = useAppContext();

  useEffect(() => {
    if (getQuantity(id) <= 0) {
      removeProduct(id);
    }
  }, [getQuantity(id)]);

  return (
    <ContainerQuantity>
      <span>Qtd:</span>
      <DecrementButton
        data-product-id={id}
        data-testid="button-decrement"
        onClick={() => handleDecrement(id)}
      >
        -
      </DecrementButton>

      <InputQuantity
        type="number"
        value={getQuantity(id)}
        onChange={(e) => updateQuantity(Number(id), Number(e.target.value))}
      />
      <IncrementButton
        data-product-id={id}
        data-testid="button-increment"
        onClick={() => handleIncrement(id)}
      >
        +
      </IncrementButton>
    </ContainerQuantity>
  );
};

export default QuantityInput;
