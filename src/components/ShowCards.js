import React, { Component } from 'react';
import '../App.css';

export default class ShowCards extends Component {
  
  render() {
    const {showsList} = this.props;
    console.log(showsList);

    const showsElements = showsList.map((e) => {
        return <article className="small-4 medium-auto cell">
            <div className="card">
                <figure className="image">
                    <a href={e.show.url} target="_blank">
                        <img src={e.show.image && e.show.image.medium} 
                        alt={e.show.name}/>
                    </a>        
                </figure>
                <header className="title">
                    <a href={e.show.url} target="_blank">{e.show.name}</a>
                </header>
            </div>
        </article>
    })

    return (<ul>{showsElements}</ul>);
  }
}