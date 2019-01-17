import React, { Component } from 'react';
import '../App.css';
import Card from './Card';

export default function ShowCards(props) {
    const showsElements = props.showsList.map((e) => {
        return Card(e);
    });

    return <ul>{showsElements}</ul>;
}
