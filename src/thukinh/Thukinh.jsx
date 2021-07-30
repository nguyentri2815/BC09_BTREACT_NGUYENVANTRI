import React, { Component } from "react";
import GlassesItem from "./components/GlassesItem";
import "./style.css";

export default class Thukinh extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./glassesImage/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./glassesImage/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 30,
        name: "DIOR D6005U",
        url: "./glassesImage/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 30,
        name: "PRADA P8750",
        url: "./glassesImage/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 30,
        name: "PRADA P9700",
        url: "./glassesImage/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 30,
        name: "FENDI F8750",
        url: "./glassesImage/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 30,
        name: "FENDI F8500",
        url: "./glassesImage/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 30,
        name: "FENDI F4300",
        url: "./glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending withamother of pearl effect tip. ",
      },
    ],
    glassestest:{},
  };
  clickitem=(item)=>{
      this.setState({
        glassestest:item
      })
  }
  render() {
    return (
      <div className="glasses">
        <div
          className="container "
          style={{
            backgroundImage: `url("./glassesImage/background.jpg")`,
          }}
        >
          <h3>TRY CLASSES APP ONLINE</h3>
          <div className="photo-sample">
            <img src="./glassesImage/model.jpg" alt="" />
            <img className="glasses-test" src={this.state.glassestest.url} alt="" />
            <div className={this.state.glassestest.url?"info opacity":"info"}>
              <h5>{this.state.glassestest.name}</h5>
              <p>{this.state.glassestest.desc}</p>
            </div>
          </div>
          <div className="glasses-list">
            {this.state.arrProduct.map(item=>(
                <GlassesItem key={item.id} item={item} clickitem={this.clickitem}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
