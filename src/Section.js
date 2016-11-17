
import React from 'react';
import YouTube from 'react-youtube';
import _ from 'lodash';

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
                      marginTop: '90px'};
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

export const ProductPic = ({ title, src }) => {
    if (src.match('youtu.be')) {
        return <YouTube videoId={_.last(src.split('/'))}
                        opts={{width: 853, height: 480}}/>;
    }else{
        return <img alt={title} src={src} style={{maxHeight: "550px"}} />;
    }
};

export const LeftProduct = ({ title, author, src, children }) => (
    <div className="container">
        <Row className="vertical-middle">
            <Column md={6} className="text-center">
                <ProductPic alt={title} src={src} />
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
                <ProductPic alt={title} src={src} />
            </Column>
        </Row>
    </div>
);

export const CenterProduct = ({ title, author, src, children }) => (
    <div className="container">
        <Row className="text-center">
            <Column md={12}>
                <SectionHeader headline={title} subline={author} />
            </Column>
        </Row>
        <Row>
            <Column md={12} className="text-center">
                <ProductPic title={title} src={src} />
            </Column>
        </Row>
        <Row>
            <Column md={8} mdOffset={2} className="text-center" style={{paddingTop: "20px"}}>
                {children}
            </Column>
        </Row>
    </div>
);

export const Product = ({ left, right, first, src, ...props }) => {
    const video = !!src.match('youtu.be');

    return (
        <LightSection hasTop={first ? null : "cross"} padDecor color="red">
            {left && !video ? <LeftProduct src={src} {...props} /> : null}
            {right && !video ? <RightProduct src={src} {...props} /> : null}
            {video ? <CenterProduct src={src} {...props} /> : null}
        </LightSection>
    );
};
