
import React from 'react';

import * as TopDecor from './decorations/top';
import * as BottomDecor from './decorations/bottom';

const DecorTop = ({ type = 'leftSlope' }) => (
    <div className="decor-top">
        {TopDecor[type]}
    </div>
);

const DecorBottom = ({ type = 'leftSlope' }) => (
    <div className="decor-bottom">
        {BottomDecor[type]}
    </div>
);

export const DarkSection = ({ children, hasTop, hasBottom, ...params }) => {
    let extras = [];
    if (hasTop) extras.push('has-top');
    if (hasBottom) extras.push('has-bottom');

    extras = extras.join(' ');

    return (
        <section className={`section swatch-blue-white ${extras}`} {...params}>
            {hasTop ?
             <DecorTop type={typeof hasTop === 'string' ? hasTop : undefined} /> : null}
            <div className="container">
                {children}
            </div>
            {hasBottom ?
             <DecorBottom type={typeof hasTop === 'string' ? hasTop : undefined} /> : null}
        </section>
    );
};

export const LightSection = ({ children, hasTop, hasBottom, ...params }) => {
    let extras = [];
    if (hasTop) extras.push('has-top');
    if (hasBottom) extras.push('has-bottom');

    extras = extras.join(' ');

    return (
        <section className={`section swatch-white-blue ${extras}`} {...params}>
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
