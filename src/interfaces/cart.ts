export interface Product {
  id?: number;
  name?: string;
  brand?: string;
  photo?: string;
  description?: string;
  price?: number;

  quantity?: number;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeProduct: (productId: number) => void;
  getQuantity: (productId: number) => any;
  handleDecrement: (productId: number) => void;
  handleIncrement: (productId: number) => void;
  data: any;
  isLoading: boolean;
  cartOpen: boolean;
  setCartOpen: any;
}

export interface CartItemProps {
  product: Product;
}
