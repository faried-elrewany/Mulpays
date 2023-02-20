import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient font-medium font-poppins text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
