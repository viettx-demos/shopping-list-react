import React, { Component } from 'react'
import ShoppingList from './ShoppingList'
import AddItem from './AddItem'
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

  onRemove (uid) {
    const {list} = this.state
    const items = list.filter(item => item.uid !== uid)

    this.setState({list: items})
  }

  onToogle (uid, isCompleted) {
    const {list} = this.state
    for (let item of list) {
      if (item.uid === uid) {
        item.completed = isCompleted
        break
      }
    }

    this.setState({list})
  }

  onFilter (type) {
    this.setState({filter: type})
  }

  onAddNewItem (item) {
    const {currentUID, list} = this.state
    const newItem = {...item, uid: currentUID + 1, completed: false}
    this.setState({
      list: [...list, newItem],
      currentUID: currentUID + 1
    })
  }

  render() {
    const {filter} = this.state
    return (
      <div className="app">
        <h1>Shopping List</h1>

        <div className="row shopping-summary">
          <span className="item-left">{this.countItemsLeft()} items left</span>
          <ul className="filters">
            <li className={filter === 'all' ? 'actived' : ''} onClick={() => this.onFilter('all')}>All</li>
            <li className={filter === 'incomplete' ? 'actived' : ''} onClick={() => this.onFilter('incomplete')}>Incomplete</li>
          </ul>
          <span className="total">Total: ${this.totalPrice()}</span>
        </div>

        <AddItem onAdd={this.onAddNewItem.bind(this)} />
        <ShoppingList 
          list={this.filteredItems()} 
          onRemove={this.onRemove.bind(this)} 
          onToogle={this.onToogle.bind(this)}
        />
      </div>
    );
  }
}

export default App;
