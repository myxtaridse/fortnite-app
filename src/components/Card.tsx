import React from "react";
import imageCard from "../assets/cardImg.png";
import star from "../assets/star.svg";
import { cartType, CustomContext } from "../App";

const Card: React.FC<cartType> = ({
  id,
  image,
  description,
  name,
  price,
  bgColor,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { addItemCart }: any = React.useContext(CustomContext);

  const props = {
    id,
    image,
    description,
    name,
    price,
    bgColor,
  };
  return (
    <div
      className="
        card bg-[#1F1F1F] 
      rounded-t-3xl rounded-b-lg m-auto  z-10 shadow-2xl"
    >
      <img
        style={{ backgroundColor: bgColor }}
        className="rounded-3xl mb-3 image-card"
        src={image ? image : imageCard}
        alt="card"
      />
      <h1 className="px-6 py-2 text">{name}</h1>
      <p className="font-normal px-6">{description}</p>
      <div className="flex py-3 px-6 stars">
        <img className="w-5" src={star} alt="star" />
        <img className="w-5" src={star} alt="star" />
        <img className="w-5" src={star} alt="star" />
        <img className="w-5" src={star} alt="star" />
        <img className="w-5" src={star} alt="star" />
      </div>
      <div className=" py-4 flex w-max m-auto btns">
        <div className="mx-[1px] relative btn">
          <svg
            viewBox="0 0 246 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1H235.324C241.903 1 246.259 7.82788 243.486 13.7936L224.893 53.7936C223.417 56.969 220.233 59 216.732 59H9.99999C5.02943 59 1 54.9706 1 50V10C1 5.02944 5.02944 1 10 1Z"
              stroke="#673FBE"
              strokeWidth="2"
            />
          </svg>
          <button className="absolute left-14">Подробнее</button>
        </div>
        <div
          className="mx-[1px] relative btn"
          onClick={() => {
            if (props) addItemCart(props);
          }}
        >
          <svg
            viewBox="0 0 147 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5956 6.55746C17.0398 2.61862 20.7891 0 24.9844 0H137C142.523 0 147 4.47715 147 10V50C147 55.5228 142.523 60 137 60H10.3177C3.36673 60 -1.46397 53.0836 0.928934 46.5575L15.5956 6.55746Z"
              fill="#673FBE"
            />
          </svg>

          <button className="absolute right-8">{price} ₽</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
