import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this)

        this.state = {exercises: []};
    }

    render() {
        return (
            <div>
                <p>You are on the Exercises List component!</p>
            </div>
        )
    }
}