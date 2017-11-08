import React, { Component } from 'react'
import ShoppingList from './ShoppingList'
import appState from '../AppState'
import '../styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = appState
  }

  filteredItems () {
    const {list, filter} = this.state
    if (filter === 'all') {
      return list
    }

    return list.filter(item => !item.completed)
  }

  countItemsLeft () {
    const {list} = this.state
    return list.filter(item => !item.completed).length
  }

  totalPrice () {
    const {list} = this.state
    return list.reduce((total, item) => total + item.quantity*item.price, 0)
  }

  render() {
    return (
      <div className="app">
        <h1>Shopping List</h1>

        <div className="row shopping-summary">
          <span className="item-left">{this.countItemsLeft()} items left</span>
          <ul className="filters">
            <li className="actived">All</li>
            <li>Incomplete</li>
          </ul>
          <span className="total">Total: ${this.totalPrice()}</span>
        </div>

        <div className="row add-new-item">
          <div className="form">
            <input type="text" className="row item-name" placeholder="New item need to shop" />
            <div className="item-info">
              <input type="text" className="row item-price" placeholder="Price" />
              <input type="text" className="row item-quantity" placeholder="Quantity" />
              <input type="text" className="row item-unit" placeholder="Unit" />
            </div>
          </div>
          <button className="add-btn">Add Item</button>
        </div>
        <ShoppingList list={this.filteredItems()} />
      </div>
    );
  }
}

export default App;
