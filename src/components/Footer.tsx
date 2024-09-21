// import React from "react";
import image from "../assets/first-footer.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-footer-black"></div>
      <img
        className="absolute z-[100] position-image w-[38%]"
        src={image}
        alt="footer"
      />
      <p className="absolute bottom-[10px] left-[40vw] text-white font-normal z-[200] font-sans">
        © 2024 Создание сайта. https://github.com/myxtaridse
      </p>
    </div>
  );
};

export default Footer;
