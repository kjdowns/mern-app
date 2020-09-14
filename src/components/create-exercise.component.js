import React, { Component } from 'react';

export default class CreateExercises extends Component {

    constructor(){
        super();

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>You are on the Create Exercises component!</p>
            </div>
        )
    }
}