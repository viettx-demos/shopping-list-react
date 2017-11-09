import React, { Component } from 'react'

export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.addItem = this.props.onAdd
    this.state = {
      title: '',
      price: '',
      quantity: '',
      unit: ''
    }
  }

  handleSubmit () {
    const {title, price, quantity, unit} = this.state
    this.addItem({title, price, quantity, unit})
  }

  render () {
    return (
      <div className="row add-new-item">
        <div className="form">
          <input 
            type="text"
            className="row item-name"
            placeholder="New item need to shop"
            onChange={(evt) => this.setState({title: evt.target.value})}
          />
          <div className="item-info">
            <input
              type="text"
              className="row item-price"
              placeholder="Price"
              onChange={(evt) => this.setState({price: evt.target.value})}
            />
            <input
              type="text"
              className="row item-quantity"
              placeholder="Quantity"
              onChange={(evt) => this.setState({quantity: evt.target.value})}
            />
            <input
              type="text"
              className="row item-unit"
              placeholder="Unit"
              onChange={(evt) => this.setState({unit: evt.target.value})}
            />
          </div>
        </div>
        <button className="add-btn" onClick={this.handleSubmit.bind(this)}>Add Item</button>
      </div>
    )
  }
}