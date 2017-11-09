import React, { Component } from 'react'

export default class ShoppingNav extends Component {
  render () {
    const {itemLeft, totalPrice, onFilter, filter} = this.props

    return (
      <div className="row shopping-summary">
        <span className="item-left">{itemLeft} items left</span>
        <ul className="filters">
          <li className={filter === 'all' ? 'actived' : ''} onClick={() => onFilter('all')}>All</li>
          <li className={filter === 'incomplete' ? 'actived' : ''} onClick={() => onFilter('incomplete')}>Incomplete</li>
        </ul>
        <span className="total">Total: ${totalPrice}</span>
      </div>
    )
  }
}