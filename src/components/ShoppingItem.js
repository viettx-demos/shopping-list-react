import React, { Component } from 'react'

export default class ShoppingItem extends Component {
  render () {
    const {item, onRemove, onToogle} = this.props

    return (
      <li key={item.uid} className="row">
        <input type="checkbox" className="toogle" checked={item.completed} onChange={() => onToogle(item.uid, !item.completed)} />
        <div className="info">
          <h2>{item.title}</h2>
          <div className="sub-info">
            <span className="quantity">Quantity: {item.quantity}</span>
            <span>${item.price}/{item.unit}</span>
          </div>
        </div>
        <span className="sub-total">${item.quantity * item.price}</span>
        <a className="delete" onClick={() => onRemove(item.uid)}>x</a>
      </li>
    )
  }
}