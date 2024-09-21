import React from "react";
import money from "../assets/money.webp";
import { cartType, CustomContext } from "../App";

const CartItem: React.FC<cartType> = ({
  id,
  image,
  description,
  name,
  price,
  bgColor,
  quantity,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { deleteItemCart, addQuantityItem, removeQuantityItem }: any =
    React.useContext(CustomContext);
  return (
    <div className="bg-[#3B558E]/60 m-4 py-4 px-8 flex items-center justify-between mt-8 rounded-3xl relative cart-item">
      <div className="flex">
        <img
          style={{ backgroundColor: bgColor }}
          className="w-28 h-32 object-cover mr-6 border-[#fff] border-2 border-solid rounded-md"
          src={image}
        />
        <div className="flex flex-col my-4">
          <h2 className="text-2xl">{name}</h2>
          <hr />
          <h6 className="text-[#d7dfeb] w-80">{description}</h6>
        </div>
      </div>
      {quantity && (
        <div className="text-4xl">
          <span
            className="mr-5 cursor-pointer"
            onClick={() => removeQuantityItem(id, quantity)}
          >
            -
          </span>
          x{quantity}
          <span
            className="ml-5 cursor-pointer"
            onClick={() =>
              addQuantityItem({
                id,
                image,
                description,
                name,
                price,
                bgColor,
                quantity,
              })
            }
          >
            +
          </span>
        </div>
      )}
      <div className="bg-[#000724] py-6 px-24 rounded-3xl btnCart">
        <div className="flex items-center gap-2 justify-center">
          <img loading="lazy" className="w-8" src={money} />
          <p className="text-3xl">
            {quantity && quantity > 1 ? price * quantity : price}
          </p>
        </div>
        <button className="mt-4 bg-[#F7E94A] border-[#FFFFD8] border-4 border-solid px-8 text-[#1C2C49]">
          Купить
        </button>
      </div>
      <div
        onClick={() => deleteItemCart(id, quantity)}
        className="bg-red-500/80 absolute top-0 w-20 bottom-0 rounded-[0_24px_24px_0] deleteBtn"
      >
        <div className="w-10 h-10 m-auto mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(238,237,237,1)"
          >
            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
