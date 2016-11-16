
import React from 'react';

import { linkify } from './helpers';
import logo from './logo.svg';
import { DarkSection } from './Section';
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
                        {['Why React ❤️', 'What 📖 🎥', 'Authors 🚶', 'Packages 📦'].map(name => (
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
            <p className="big">Learn React, support opensource</p>
            <p>&lt;More description, add lead magnet&gt;</p>
        </header>
    </DarkSection>
);
