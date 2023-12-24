import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/css/custom-animate.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

import Routers from "./routers/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWOW from "./custom-hooks/useWOW";
import { useEffect } from "react";

function App() {
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
