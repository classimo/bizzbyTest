import React from 'react';
import Container from  './Container';
import Title from './Title';
import Slider from './Slider';
import Amount from './Amount';
import Based from './Based';
import PercentageInput from './PercentageInput';
import RentAmountInput from './RentAmountInput';
import grid from '../styles/Grid.css';
import styles from '../styles/Slider.css';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            propertyCount: 20,
            totalAmount: 30000,
            perMonthAmount: 250,
            percentage: 10,
            rentAmount: 1500
        };
    }
    calculateAmount(propertyCount){
        this.setState({
            propertyCount: propertyCount,
            totalAmount: propertyCount * this.state.rentAmount,
            perMonthAmount: Math.floor(propertyCount * this.state.rentAmount * this.state.percentage /100 /12),
        })
    }
    updatePercentage(pct){
        this.setState({
            percentage: pct,
            propertyCount: this.state.propertyCount,
            totalAmount: this.state.totalAmount,
            perMonthAmount: Math.floor(this.state.propertyCount * this.state.rentAmount * pct /100 /12)
        });

    }
    updateRentAmount(rentAmount){
        this.setState({
            percentage: this.state.percentage,
            propertyCount: this.state.propertyCount,
            totalAmount: this.state.propertyCount * rentAmount,
            perMonthAmount: Math.floor(this.state.propertyCount * rentAmount * this.state.percentage /100 /12),
            rentAmount: rentAmount
        });
    }
    render(){
        return(
            <Container>
                <Title text="How many properties have you got?" />
                <Slider propertyCount={this.state.propertyCount} propertyCountChange={this.calculateAmount.bind(this)}/>
                <Amount totalAmount={this.state.totalAmount} />
                <Based propertyCount={this.state.propertyCount} perMonthAmount={this.state.perMonthAmount} />
                <PercentageInput percentage={this.state.percentage} updatePercentage={this.updatePercentage.bind(this)}/>
                <RentAmountInput rentAmount={this.state.rentAmount} updateRentAmount={this.updateRentAmount.bind(this)}/>
            </Container>
        )
    }
}

