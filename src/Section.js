
import React from 'react';


const DecorTop = () => (
    <div className="decor-top">
        <svg className="decor" height="100%" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L100 100 L0 100" strokeWidth="0"></path>
        </svg>
    </div>
);

const DecorBottom = () => (
    <div className="decor-bottom">
        <svg className="decor" height="100%" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L100 0 L100 100" strokeWidth="0"></path>
        </svg>
    </div>
);

export const DarkSection = ({ children, hasTop, hasBottom }) => {
    let extras = [];
    if (hasTop) extras.push('has-top');
    if (hasBottom) extras.push('has-bottom');

    extras = extras.join(' ');

    return (
        <section className={`section swatch-blue-white ${extras}`}>
            {hasTop ? <DecorTop /> : null}
            <div className="container">
                {children}
            </div>
            {hasBottom ? <DecorBottom /> : null}
        </section>
    );
};

export const LightSection = ({ children, hasTop, hasBottom }) => {
    let extras = [];
    if (hasTop) extras.push('has-top');
    if (hasBottom) extras.push('has-bottom');

    extras = extras.join(' ');

    return (
        <section className={`section swatch-white-blue ${extras}`}>
            {hasTop ? <DecorTop /> : null}
            <div className="container">
                {children}
            </div>
            {hasBottom ? <DecorBottom /> : null}
        </section>
    );
};

export const SectionHeader = ({ headline, subline }) => (
    <header className="section-header underline">
        <h1 className="headline super hairline">{headline}</h1>
        <p>{subline}</p>
    </header>
);
