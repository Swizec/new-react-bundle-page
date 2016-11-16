
import React from 'react';

import * as TopDecor from './decorations/top';
import * as BottomDecor from './decorations/bottom';

import { Row, Col as Column } from 'react-bootstrap';

const DecorTop = ({ style = {}, type = 'leftSlope' }) => (
    <div style={style}>
        <div className="decor-top">
            {TopDecor[type] && React.createElement(TopDecor[type])}
        </div>
    </div>
);

const DecorBottom = ({ style = {}, type = 'leftSlope' }) => (
    <div style={style}>
        <div className="decor-bottom">
            {BottomDecor[type] && React.createElement(BottomDecor[type])}
        </div>
    </div>
);

export const Section = ({ children, hasTop, hasBottom, padDecor, type = "dark", color = "blue", ...params }) => {
    let extras = [],
        decorStyle = {},
        swatch = '';

    if (hasTop) extras.push('has-top');
    if (hasBottom) extras.push('has-bottom');

    extras = extras.join(' ');

    if (padDecor) {
        decorStyle = {padding: '20px 0px',
                      marginTop: '50px'};
    }

    if (type === 'dark') {
        swatch = `swatch-${color}-white`;
    }else{
        swatch = `swatch-white-${color}`;
    }

    return (
        <section className={`section ${swatch} ${extras}`} {...params}>
            {hasTop ?
             <DecorTop type={typeof hasTop === 'string' ? hasTop : undefined} style={decorStyle} /> : null}
            <div className="container">
                {children}
            </div>
            {hasBottom ?
             <DecorBottom type={typeof hasBottom === 'string' ? hasBottom : undefined} style={decorStyle} /> : null}
        </section>
    );
};

export const DarkSection = ({ ...props }) => <Section type="dark" {...props} />;
export const LightSection = ({ ...props }) => <Section type="light" {...props} />;

export const SectionHeader = ({ headline, subline }) => (
    <header className="section-header underline">
        <h1 className="headline super hairline">{headline}</h1>
        <p>{subline}</p>
    </header>
);

export const LeftProduct = ({ title, author, src, children }) => (
    <div className="container">
        <Row className="vertical-middle">
            <Column md={6} className="text-center">
                <img alt={title} src={src} style={{maxHeight: "550px"}} />
            </Column>
            <Column md={6}>
                <SectionHeader headline={title} subline={author} />
                {children}
            </Column>
        </Row>
    </div>
);

export const RightProduct = ({ title, author, src, children }) => (
    <div className="container">
        <Row className="vertical-middle">
            <Column md={6}>
                <SectionHeader headline={title} subline={author} />
                {children}
            </Column>
            <Column md={6} className="text-center">
                <img alt={name} src={src} style={{maxHeight: "550px"}} />
            </Column>
        </Row>
    </div>
);

export const Product = ({ left, right, first, ...props }) => (
    <LightSection hasTop={first ? null : "cross"} padDecor color="red">
        {left ? <LeftProduct {...props} /> : null}
        {right ? <RightProduct {...props} /> : null}
    </LightSection>
);
