import React, { Component } from "react";

export default class GlassesItem extends Component {
  render() {
    return (
      <>
        <div className="glasses-item" onClick={()=> this.props.clickitem(this.props.item)}>
          <img src={this.props.item.url} alt="" />
        </div>
      </>
    );
  }
}
