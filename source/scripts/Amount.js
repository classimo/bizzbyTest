import React from 'react';

export default class Amount extends React.Component{
    render(){
        return(
            <div className="amount">£{this.props.totalAmount}</div>
        )
    }
}