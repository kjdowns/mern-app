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

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(e){
        this.setState({
            date: e.target.value
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