export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  // used in UI
  quantity?: number;
}

export interface ProductCheckoutRequest {
  email: string;
  name: string;
  address: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvc: string;
}
