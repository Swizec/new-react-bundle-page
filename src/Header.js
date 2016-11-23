
import React from 'react';
import { Col as Column, Row } from 'react-bootstrap';

import { linkify } from './helpers';
import logo from './logo.svg';
import { DarkSection, DripButton, DripLink } from './Section';
import { TestimonialTweets, Tweet, Testimonial } from './Content';

export const Menu = () => (
    <div className="sticky-wrapper" style={{height: "92px"}}>
        <header id="masthead" className="navbar navbar-sticky swatch-blue-white">
            <div className="container">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">
                        <img src={logo} style={{height: "70%", display: "inline-block"}} role="presentation" />
                        React Indie Bundle
                    </a>
                </div>

                <nav className="main-navbar">
                    <ul className="nav navbar-nav navbar-right">
                        {['Why React ❤️', 'What 📚 📽', 'Authors 🚶', 'Packages 📦'].map(name => (
                            <li key={name}><a href={`#${linkify(name)}`} >
                            {name}
                            </a></li>
                         ))}
                    </ul>
                </nav>
            </div>
        </header>
    </div>
);

export const Jumbotron = () => (
    <DarkSection hasBottom="leftSlope">
        <header className="section-header underline">
            <h1 className="headline hyper hairline">React Indie Bundle</h1>
            <p className="big" style={{color: 'white'}}><big>Learn React, support opensource</big></p>
            <p><i>React Indie Bundle</i> gives you <i>everything you need</i> to become a React engineer.<br/> Books 📚, videos 📽, cheatsheets 📖, living code 🛠.</p>
            <p>&nbsp;</p>
            <p className="big">Sales open on <i>Cyber Monday, Nov 28th</i></p>
            <p><DripButton /></p>
            <p>We're <i>donating 10%</i> of sales to React <i>ecosystem creators</i> that <DripLink>you suggest</DripLink>.</p>
        </header>
    </DarkSection>
);
