import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
import { star } from "../assets";
const FeatureCard = ({ icon, title, content, idx }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      idx !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>
    <div className=" flex flex-col flex-1 ml-3">
      <h4
        className={`font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]`}
      >
        {title}
      </h4>
      <p
        className={`font-poppins font-normal text-dimWhite text-[18px] mb-1 leading-[23px]`}
      >
        {content}
      </p>
    </div>
  </div>
);
const Buisness = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          you do the buisness <br className="sm:block hidden" />
          we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market. 100% Secured We take proactive steps
          make sure your information and transactions are secure. Balance
          Transfer Get Started A balance transfer credit card can save you a lot
          of money in interest charges.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Buisness;
