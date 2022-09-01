import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { LINKS } from "./constants/constants";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar pages={LINKS} />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
