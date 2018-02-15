import React, { Component, PropTypes } from 'react'


export default class CartItem extends Component {
  render() {
    const { price, quantity, title, onRemove,image } = this.props

    return (
        <div>
            <div className="container" style={{"margin-top":"1%"}}>
                <div className="row" style={{"width":"60%"}}>
                    <div className="col-md-3 col-sm-3 col0-xs-3">
                        <img src={image} style={{"width":"80%","height":"80%"}}/>
                    </div>
                    <div className="col-md-3">
                        <h4>price:{price}</h4>
                        <h4>quantity:{quantity}</h4>
                        <h4>title:{title}</h4>
                    </div>
                    <div className="col-md-1">
                        <button onClick={onRemove}>X</button>
                    </div>
                    
                </div>
                <div className="row" style={{"width":"40%"}}>
                    <hr/>
                </div>
            </div>
            
        </div>
    )
  }
}