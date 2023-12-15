import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/css/custom-animate.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
