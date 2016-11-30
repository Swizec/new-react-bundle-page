
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
                        <img src={logo} style={{height: "60%", display: "inline-block"}} role="presentation" />
                        React Indie Bundle
                    </a>

                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".main-navbar" style={{marginRight: "5px"}}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <nav className="main-navbar navbar-collapse collapse" role="navigation">
                    <ul className="nav navbar-nav navbar-right">
                        {['Why React ❤️', 'What 📚 📽', 'Authors 🚶', 'Build Your Bundle 📦'].map(name => (
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
            <p className="big" style={{color: 'white'}}>
                <big>Everything you need to become a React engineer.</big>
            </p>
            <p className="big">Books 📚, videos 📽, cheatsheets 📖, living code 🛠.</p>
            <p>&nbsp;</p>
            <p><a className="gumroad-button"
                      href={`https://gum.co/BNnfs`}
                      data-gumroad-single-product="true"
                      target="_blank">Build Your Own Bundle</a></p>
            <p>Sales close on <i>Monday, Dec 5th</i></p>
            <p>&nbsp;</p>
            <p>We're <i>donating 10%</i> of sales to <i>React open source</i> projects that you suggest.</p>
        </header>
    </DarkSection>
);

export const JumbotronFooter = () => (
    <div className="section-header">
        <h1 className="headline hyper hairline">React Indie Bundle</h1>
        <p className="big" style={{color: 'white'}}>
            <big>Everything you need to become a React engineer.</big>
        </p>
        <p className="big">Books 📚, videos 📽, cheatsheets 📖, living code 🛠.</p>
        <p>&nbsp;</p>
        <p><DripButton caption="Get your free sample"/></p>
        <p className="big">Sales close on <i>Monday, Dec 5th</i></p>
    </div>
)
