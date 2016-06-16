import React from 'react';

export default class RentAmountInput extends React.Component{
    rentAmountChanged(event){
        this.props.updateRentAmount(event.target.value);
    }
    render(){
        return(
            <div className="based">
                Rent amount £
                <input type="number" value={this.props.rentAmount} onChange={this.rentAmountChanged.bind(this)}/>
            </div>
        )
    }
}