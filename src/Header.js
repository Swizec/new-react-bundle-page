
import React from 'react';
import { Col as Column, Row } from 'react-bootstrap';

import { linkify } from './helpers';
import logo from './logo.svg';
import { DarkSection, DripButton } from './Section';
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
            <p><i>React has arrived.</i> The ecosystem is stabilizing, the best practices are emerging, the library selection is growing, engineers are in love.❤️  <i>Now is the time to get in</i>.</p>
            <p>But it's still hard to get started. The jargon is thick and the ecosystem is big.</p>
            <p><i>React Indie Bundle</i> gives you <i>everything you need</i> to become a React engineer.<br/> Books 📚, videos 📽, cheatsheets 📖, living code 🛠.</p>
            <p className="big">Sales open on <i>Cyber Monday, Nov 28th</i></p>
            <p><DripButton /></p>
            <p className="big">We're <i>donating 10%</i> of sales to React <i>ecosystem creators</i> that <i>you suggest</i>.</p>
        </header>
    </DarkSection>
);
