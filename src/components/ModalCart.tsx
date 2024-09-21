import React from "react";

import { cartType, CustomContext } from "../App";
import CartItem from "./CartItem";

const ModalCart = () => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const { setModal, cart } = React.useContext(CustomContext);
  const setModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === divRef.current) {
      setModal(false);
    }
  };

  const totalPrice = cart.reduce((sum: number, el: cartType) => {
    if (el.quantity) return sum + el.price * el.quantity;
  }, 0);

  return (
    <div
      ref={divRef}
      onClick={(e) => setModalClick(e)}
      className="bg-black/60 w-screen h-screen fixed top-0 left-0 z-[200]"
    >
      <div className="modal rounded-3xl bg-no-repeat bg-left-top bg-[url('https://cdn2.unrealengine.com/fneco-31-00-subs-dollenthusiast-crew-website-legacy-styles-background-1920x1080-d4bfd4c2a5f7.jpg')] fixed ">
        <div className="absolute bottom-2 left-0 flex items-end justify-between w-full z-[1000]">
          <div className="text-3xl mx-6 my-8">
            Общая стоимость:{" "}
            <span className="mx-2">{totalPrice ? totalPrice : 0}</span>
          </div>
          <img
            className="w-56"
            src="https://cdn2.unrealengine.com/vbucks-686x388-45ae9872dd25.png?resize=1&w=2560"
          />
        </div>
        <div>
          <h1 className="text-6xl cart-text text-center m-4">Корзина</h1>
          <div className="h-[68vh] overflow-y-auto">
            {cart.map((item) => (
              <CartItem key={Math.random()} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
