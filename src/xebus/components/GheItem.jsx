import React, { Component } from "react";

export default class GheItem extends Component {
    state={
        isBook:false,
    }
    toggleBook=(item)=>{
        this.setState({isBook: !this.state.isBook})
        this.props.Booking(item);
    }
    render() {
      const {item}= this.props;
    return (
      <>
        <div className="col-3">
          <button
            className={item.TrangThai ? "active":this.state.isBook?"placing": ""}
            disabled={item.TrangThai ? true : ""}
            onClick={()=>this.toggleBook(item)}
          >
            {this.props.item.SoGhe}
          </button>
        </div>
      </>
    );
  }
}
