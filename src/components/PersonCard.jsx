import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:this.props.age
            
        };
    }
    
    
    
    render() {
        const increaseAge = () => {
            console.log("clicked age on " + this.props.firstName + "'s post" )
            this.setState({age:this.state.age + 1})
        }

        return (
            <div>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick={increaseAge} >Birthday Button {this.props.firstName} {this.props.lastName}</button>
                </div>

            </div>
        );
    }
}
    
export default PersonCard;

// {this.setState({age:this.props.age})}