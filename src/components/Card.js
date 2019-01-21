import React, { Component } from 'react';

const Card = (props) => {
    const show = props.cardData.show;
    return <article>
            <div className="card">
                <figure className="image">
                    <a href={show.url} target="_blank">
                        <img src={show.image && show.image.medium} 
                        alt={show.name}/>
                    </a>        
                </figure>
                <header className="title">
                    <a href={show.url} target="_blank">{show.name}</a>
                </header>
            </div>
        </article>;
};

export default Card;