import React, { Component } from 'react';
import '../App.css';
import Card from './Card';

 const ShowCards = (props) => {
    const showsElements = props.showsList.map((show) => {
        return <Card cardData={show}/>;
    });

    return <ul>{showsElements}</ul>;
}

export default ShowCards;
