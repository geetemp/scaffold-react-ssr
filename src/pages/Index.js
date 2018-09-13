import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "assets/imgs/logo.svg";
import { Button } from "gee-ui";
import styles from "./Index.scss";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="cs">来吧</a>
        <div>
          <Link to="/tictactoe" className="go-tic">
            来把XO旗！
          </Link>
        </div>
        <div>
          <Link to="/tictactoe/1" className="go-tic">
            来把XO旗！+ 子路由
          </Link>
        </div>
        <div className="components">
          <Button>Antd Button</Button>
          <Button type="danger">Primary</Button>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Index;
