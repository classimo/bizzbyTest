import React from 'react';

export default class BookDescription extends React.Component{
    render(){
        return(
            <h1>{this.props.text}</h1>
        )
    }
}