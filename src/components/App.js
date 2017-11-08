import React, { Component } from 'react'
import '../styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Shopping List</h1>

        <div className="row shopping-summary">
          <span className="item-left">3 items left</span>
          <ul className="filters">
            <li className="actived">All</li>
            <li>Incomplete</li>
          </ul>
          <span className="total">Total: $2,065</span>
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

        <ul className="shopping-list">
          <li className="row">
            <input type="checkbox" className="toogle" />
            <div className="info">
              <h2>Iphone X</h2>
              <div className="sub-info">
                <span className="quantity">Quantity: 2</span>
                <span>$1,000/device</span>
              </div>
            </div>
            <span className="sub-total">$2,000</span>
            <a className="delete">x</a>
          </li>
          <li className="row">
            <input type="checkbox" className="toogle" />
            <div className="info">
              <h2>Apple</h2>
              <div className="sub-info">
                <span className="quantity">Quantity: 10</span>
                <span>$5/kg</span>
              </div>
            </div>
            <span className="sub-total">$50</span>
            <a className="delete">x</a>
          </li>
          <li className="row">
            <input type="checkbox" className="toogle" />
            <div className="info">
              <h2>Coca Cola</h2>
              <div className="sub-info">
                <span className="quantity">Quantity: 5</span>
                <span>$3/bottle</span>
              </div>
            </div>
            <span className="sub-total">$15</span>
            <a className="delete">x</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
