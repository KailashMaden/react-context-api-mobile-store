import React, { Component } from 'react';

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase"><u>products</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase"><u>name of products</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase"><u>price</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase"><u>quantity</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase"><u>remove</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase"><u>total</u></p>
          </div>
        </div>
      </div>
    );
  }
}
