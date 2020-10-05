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

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form>
                    <div>
                        <label>Username: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="submit" value="Create User"/>
                    </div>
                </form>
            </div>
        )
    }
}