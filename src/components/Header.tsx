import React from "react";
import title from "../assets/title.png";
import Navbar from "./Navbar";

const Header = () => {
  const imageRef = React.useRef<HTMLImageElement>(null);
  document.onmousemove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if (imageRef.current) {
      imageRef.current.style.transform =
        "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
    }
  };
  return (
    <div className="overflow-hidden w-screen h-[50rem] relative ">
      <img
        ref={imageRef}
        loading="lazy"
        className="image object-cover w-screen "
        src="https://create.fortnite.com/dark-welcome-page.png"
        alt="title"
      />
      <img className="object-cover absolute title" src={title} alt="title" />
      <div className="absolute top-0 left-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
