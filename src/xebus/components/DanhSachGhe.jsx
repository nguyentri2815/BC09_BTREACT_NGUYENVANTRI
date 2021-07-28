import React, { Component } from 'react'
import GheItem from './GheItem'

export default class DanhSachGhe extends Component {
    render() {
        const {Booking}=this.props;
        return (
            <>
                <div className="row">
                    <div className="text-center py-2">
                        tài xế
                    </div>
                    {this.props.ListSeats.map(item=>(
                        <GheItem key={item.SoGhe} item={item} Booking={Booking} isbook={this.props.isbook}/>
                    ))}
                </div>
            </>
        )
    }
}
