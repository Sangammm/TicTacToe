import React, { Component } from "react";
import { observable, action, observe, decorate } from "mobx";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.users = {
      p1: "",
      p2: ""
    };
    this.turn = "";
    this.tictac = [];
    this.gamestatus = "";
  }

  updatetictac = () => {};
}

decorate(Store, {
  observable: tictac,
  observable: turn,
  observable: gamestatuss
});
