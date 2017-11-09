import React, { Component } from 'react'
import ShoppingNav from './ShoppingNav'
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
        
        <ShoppingNav 
          itemLeft={this.countItemsLeft()}
          totalPrice={this.totalPrice()}
          filter={filter}
          onFilter={this.onFilter.bind(this)}
        />
        
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
