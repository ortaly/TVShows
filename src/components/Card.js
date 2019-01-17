import React, { Component } from 'react';

const Card = (e) => {
    return <article>
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
        </article>;
};

export default Card;