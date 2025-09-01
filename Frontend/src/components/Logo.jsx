import React from "react";
import ChatLogo from "../assets/Echoe-Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={ChatLogo} alt="Echoe Logo" className="w-10 h-10" />
      <span className="ml-2 text-2xl font-bold text-cyan-600">
        Echoe
      </span>
    </div>
  );
};

export default Logo;
