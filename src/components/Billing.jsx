import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="Billing"
          className={`w-[100%] h-[100%] relative z-[5]`}
        />
        <div className="absolute z-[3] -left-12 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-12 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily Control Your <br className="sm:block hidden" /> Billing &
          Invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5  `}>
          Paypal Easily control your billing & invoicing. Checkout Total $210
          Change Last Transaction Make Payment Dribbble Pro -$250,93 Elit enim
          sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat. 15 Days
          ago Netflix -$250,93 4 Days ago Manulife Cash -$250,93 4 Days ago
          Great! Your Payment is succesfully.
        </p>
        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6 `}>
          <img
            src={google}
            alt="google paly "
            className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}
          />
          <img
            src={apple}
            alt="apple store"
            className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
