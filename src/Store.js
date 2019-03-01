import React, { Component } from "react";
import { observable, action, decorate } from "mobx";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.users = {
      p1: 1,
      p2: 2
    };
    this.turn = 1;
    this.tictac = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gamestatus = "";
  }

  updatetictac = id => {
    this.tictac[id] = this.turn;
    if (this.turn === 1) {
      this.turn = 2;
    }
    if (this.turn === 2) {
      this.turn = 1;
    }
  };
}

decorate(Store, {
  tictac: observable,
  turn: observable,
  gamestatus: observable,
  updatetictac: action
});
