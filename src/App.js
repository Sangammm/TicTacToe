import React, { Component } from "react";
import { Row, Col } from "antd";
import { observer, inject } from "mobx-react";
import "./App.css";

class App extends Component {
  render() {
    const div = {
      margin: "100px",
      width: "300px",
      height: "300px"
    };
    const X = "X";
    const O = "O";
    const { tictac, turn, users, updatetictac } = this.props;

    const Show = props => {
      const id = parseInt(this.props.id);
      if (id === 1) {
        return X;
      }
      if (id === 2) return O;
      else return;
    };

    return (
      <div style={div}>
        <Row>
          <Col span={8}>
            <div onClick={() => updatetictac(1)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(2)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(3)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div onClick={() => updatetictac(4)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(5)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(6)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div onClick={() => updatetictac(7)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(8)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(9)}>{tictac[1] === 1 ? X : O}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default inject("store")(observer(App));
