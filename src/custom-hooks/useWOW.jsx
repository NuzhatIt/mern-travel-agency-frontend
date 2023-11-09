import WOW from "wow.js";
import "wowjs/css/libs/animate.css";

const useWOW = () => {
  const initWOW = () => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: null,
      resetAnimation: true,
    });
    wow.init();
  };
  return { initWOW };
};

export default useWOW;
