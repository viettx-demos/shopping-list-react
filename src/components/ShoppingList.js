import React, { Component } from 'react'
import ShoppingItem from './ShoppingItem'

export default class ShoppingList extends Component {
  render () {
    const {list, onRemove, onToogle} = this.props

    const items = list.map(
      item => <ShoppingItem 
                item={item} 
                key={item.uid}
                onRemove={onRemove}
                onToogle={onToogle} />
    )

    return (
      <ul className="shopping-list">
        {items}
      </ul>
    )
  }
}