import React, { Component } from 'react'

export default class ShoppingItem extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    const {item} = this.props

    return (
      <li key={item.uid} className="row">
        <input type="checkbox" className="toogle" />
        <div className="info">
          <h2>{item.title}</h2>
          <div className="sub-info">
            <span className="quantity">Quantity: {item.quantity}</span>
            <span>${item.price}/{item.unit}</span>
          </div>
        </div>
        <span className="sub-total">${item.quantity * item.price}</span>
        <a className="delete">x</a>
      </li>
    )
  }
}