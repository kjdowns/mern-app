import React, { Component } from 'react';

export default class CreateUser extends Component {

    constructor(){
        super();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div>
                <p>You are on the Create User component!</p>
            </div>
        )
    }
}