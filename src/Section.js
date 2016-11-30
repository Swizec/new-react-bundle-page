
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
        if (color.includes('-')) {
            swatch = `swatch-${color}`;
        }else{
            swatch = `swatch-${color}-white`;
        }
    }else{
        if (color.includes('-')) {
            swatch = `swatch-${color}`;
        }else{
            swatch = `swatch-white-${color}`;
        }
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
export const HighLightSection = (props) => <Section type="dark" color="yellow-black" {...props} />;

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
                <p className="text-center"><br /><WantButton /></p>
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
                <p className="text-center"><br /><WantButton /></p>
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

                <p><br /><WantButton /></p>
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

export const Avatar = ({ src, name, title, size }) => (
    <div className={`box-hex flat-shadow box-${size}`}>
        <div className="box-dummy" />
        <figure className="box-inner">
            <img className="svg-inject" src={src} alt={name}
                 style={{height: {huge: "217px",
                                  small: "68px"}[size]
                        }} />
        </figure>
    </div>
);

export const Author = ({ src, name, title, description, links }) => (
    <div>
        <Avatar src={src} name={name} title={title} size="huge" />
        <h3 className="text-center">
            {name}
            <small className="block">{title}</small>
        </h3>
        <p className="text-center">{description}</p>
        <ul className="list-inline text-center social-icons social-simple">
            {Object.keys(links).map((type, i) => (
                <li key={i}>
                    <a href={links[type]} target="_self">
                        <i className={`fa fa-${type}`} />
                    </a>
                </li>
             ))}
        </ul>
    </div>
);

const itemPrice = (item, pkg_name) => item[`${pkg_name.toLowerCase()}_price`] || item.price;

const packagePrice = (name, items) => items.map(item => itemPrice(item, name))
                                           .reduce((n, sum) => n+sum, 0);

export const PricingColumn = ({ name, price, items, darkItems, terms, md, featured, gumroad }) => (
    <Column className={`pricing-col ${featured ? 'pricing-featured' : ''}`} md={md}>
        <h2 className="pricing-head">{name}</h2>
        <div className="pricing-body">
            <div className="pricing-price">
                <div className="overlay">
                    <h4 style={{fontSize: "2.3em", paddingBottom: "0px", opacity: ".7"}}><s>${packagePrice(name, items)}</s></h4>
                </div>
            </div>
            <div className="pricing-price">
                <div className="overlay">
                    <h4 style={{paddingTop: "10px"}}>${price}</h4>
                </div>
            </div>

            <ul className="pricing-list">
                {items.map(({ title, pricing_title }, i) => <li key={i}>{pricing_title || title}</li>)}
            </ul>

            {darkItems ? <ul className="pricing-list" style={{marginTop: "-24px"}}>
             {darkItems.map(({ title }, i) => <li key={i} style={{opacity: .3}}>{title}</li>)}
             </ul> : null}

            {terms ? <ul className="pricing-list" style={{marginTop: "-24px"}}>
             {terms.map(({ title }, i) => <li key={i}>{title}</li>)}
             </ul> : null}

             <a className="gumroad-button"
                href={`https://gum.co/${gumroad}?wanted=true`}
                data-gumroad-single-product="true"
                target="_blank">Buy Now <i>${price}</i></a>
             <br />
             <small>Sales close Dec 5th</small>
        </div>

    </Column>
);


export const DripButton = ({ caption = "I want a sample" }) => (
    <a className="btn btn-lg btn-warning btn-icon-right"
       href="https://www.getdrip.com/forms/88924323/submissions/new"
    onClick={(e) => {e.preventDefault();
        window._dcq.push(["showForm", { id: "88924323" }])}}
       data-drip-show-form="88924323">

        {caption}

        <span className="hex-alt hex-alt-big">
            <i className="fa fa-heart" />
        </span>
    </a>
);

export const DripLink = ({ children }) => (
    <a href="https://www.getdrip.com/forms/88924323/submissions/new"
       data-drip-show-form="88924323"
       onClick={(e) => {e.preventDefault(); window._dcq.push(["showForm", { id: "88924323" }])}}
       style={{textDecoration: 'underline'}}>

        {children}
    </a>
);

export const WantButton = () => (
    <a className="btn btn-lg btn-danger btn-icon-right"
       href="#packages">

        I want this

        <span className="hex-alt hex-alt-big">
            <i className="fa fa-heart" />
        </span>
    </a>
);
