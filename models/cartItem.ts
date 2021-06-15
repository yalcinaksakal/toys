type CartItem = {
  id: number | string;
  name: string;
  img: string;
  price: number;
  sectionId: number | string;
  gender: number | string;
  numberOfPieces: number;
  totalPrice: number;
  //   0:mix, 1:girls, 2:boys
};

export default CartItem;
