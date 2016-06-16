import React from 'react';

export default class PercentageInput extends React.Component{
    percentageChanged(event){
        this.props.updatePercentage(event.target.value);
    }
    render(){
        return(
            <div className="based">
                Percentage
                <input type="number" value={this.props.percentage} onChange={this.percentageChanged.bind(this)}/> %
            </div>
        )
    }
}