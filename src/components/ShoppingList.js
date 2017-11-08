import React, { Component } from 'react'
import ShoppingItem from './ShoppingItem'

export default class ShoppingList extends Component {
  render () {
    const {list} = this.props
    return (
      <ul className="shopping-list">
        {list.map(item => <ShoppingItem item={item} key={item.uid} />)}
      </ul>
    )
  }
}