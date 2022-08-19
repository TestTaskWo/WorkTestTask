import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { LINKS } from "./constants/constants";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar pages={LINKS} />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
