import React, { Component } from "react";
import { Row, Col } from "antd";
import { observer, inject } from "mobx-react";
import "./App.css";

class App extends Component {
  render() {
    const divdesign = {
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
      <div>
        <Row>
          <Col span={8}>
            <div onClick={() => updatetictac(1)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(2)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(3)}>
              <Show id="1" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div onClick={() => updatetictac(4)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(5)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(6)}>
              <Show id="1" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div onClick={() => updatetictac(7)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(8)}>
              <Show id="1" />
            </div>
          </Col>
          <Col span={8}>
            <div onClick={() => updatetictac(9)}>
              <Show id="1" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

class App extends Component {}

export default inject("store")(observer(App));
