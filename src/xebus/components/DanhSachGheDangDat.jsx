import React, { Component } from "react";

export default class DanhSachGheDangDat extends Component {
  render() {
    const { booked } = this.props;
    return (
      <>
        <h4>Danh sách ghế đã đặt ({booked.length})</h4>
        {booked.map((item) => (
          <p key={item.SoGhe}>
            Ghế : {item.TenGhe} $ {item.Gia}{" "}
            <span
              className="delete"
            >
              [huy]
            </span>
          </p>
        ))}
      </>
    );
  }
}
