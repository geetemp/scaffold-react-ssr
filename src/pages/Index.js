import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button,TimePicker } from "gee-ui";
import logo from "assets/imgs/logo.svg";
import styles from "./Index.scss";

class Index extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

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
        <div>
          <Link to="/tictactoe" className="go-tic">
            来把XO旗！
          </Link>
        </div>
        <div>
          <Link to="/tictactoe/1" className="go-tic">
            来把XO旗！+ 子路由
          </Link>
          <Button>abc</Button>
          <TimePicker></TimePicker>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Index;
