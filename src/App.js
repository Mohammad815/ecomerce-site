import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
