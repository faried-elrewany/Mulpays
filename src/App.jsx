import React from "react";
import styles from "./style";
import NavBar from "./components/NavBar";
import Billing from "./components/Billing";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Buisness from "./components/Buisness";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import GetStarted from "./components/GetStarted";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FeedBack from "./components/FeedBack";
import Button from "./components/Button";

const App = () => (
  // container for all program
  <div className="bg-primary w-full overflow-hidden">
    {/* container rap our navigation */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} `}>
        <Stats />
        <Buisness />
        <Billing />
        <CTA />
        <Testimonials />
        <FeedBack />
        <Clients />
        <Card />
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
