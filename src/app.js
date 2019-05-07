import React from "react";
import ReactDOM from "react-dom";

import Header from './compoment/Header';
import Home from "./compoment/Home";
import Sectionone from "./compoment/Sectionone";
import Sectiontwo from "./compoment/Sectiontwo";
import Sectionthree from "./compoment/Sectionthree";
import Sectionfour from "./compoment/Sectionfour";
import Carttwo from "./compoment/Carttwo";
import Footer from "./compoment/footer";

import './style/style.scss';
import 'normalize.css/normalize.css';
import Cart from "./compoment/Cart";

class App extends React.Component {
  render() {
    return (
      <div className='backdr'>
        <Home />
        <Sectionone />
        <Sectiontwo />
        <Cart />
        <Sectionthree />
        <Sectionfour />
        <Carttwo />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
