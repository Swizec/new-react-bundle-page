
import React from 'react';
import TweetEmbed from './react-tweet-embed';
import _ from 'lodash';

import { Col as Column, Row } from 'react-bootstrap';

import { SectionHeader, LightSection, Product } from './Section';

export const LoveTweets = [
    "797773630654607360",
    "797775591156158464",
    "798749756507897861",
    "798555874318921728",
    "798517581623619584",
    "798419445903454209",
    "798416950841999360",
    "798353002310447104",
    "798352828993417216",
    "798331916776833024",
    "798323275751272448",
    "798321250162511872",
    "798307296723902466",
    "798303857034035200",
    "798298332607184896",
    "798276096647106560",
    "798266613799718912",
    "778350659561193472",
    "798252773401763840",
    "798246246129471489",
    "798245288729341952",
    "798244855302463489",
    "798233542174056453",
    "798231505331814400",
    "798236779195355136",
    "798243372922183680"
];

export const TestimonialTweets = [
    "798239370901753857"
];

export const Tweet = ({ id }) => (
    <TweetEmbed id={id} options={{conversation: 'none'}} />
);

export const Testimonial = ({ quote, who, src, md = 12, mdOffset = 0 }) => (
    <blockquote className="fancy-blockquote">
        <Row>
            <Column md={md} mdOffset={mdOffset}>
                <p>{quote}</p>
                <small>{src ? <a href={src}>{who}</a> : who}</small>
            </Column>
        </Row>
    </blockquote>
);

export const WhyLove = () => (
    <div>
        <SectionHeader headline="Build better webapps faster"
                       subline="Why engineers ❤️ React" />


    {_.chunk(LoveTweets, 3).map((tweets, i) => (
        <Row key={i}>
            {tweets.map((id, i) => (
                <Column md={4} key={i}>
                    <Tweet id={id} />
                </Column>
             ))}
        </Row>
    ))}
    </div>
);

export const WhyPain = () => (
    <div>
        <SectionHeader headline='"I spent days learning by myself"'
                       subline="Then Stephen's course made it click in just 10 hours!"/>
        <p>&lt;Include more user commentary/pain&gt;</p>
    </div>
);

export const What = () => (
    <div>
        <SectionHeader headline="What you get"
                       subline="Books 📖 video courses 🎥  and more 🙌🏼" />

        <Product left first src="https://s3.amazonaws.com/titlepages.leanpub.com/survivejs-react/hero?1464783722" title="SurviveJS - React" author="Juho Vepsäläinen">
            <p>SurviveJS - React shows you how to build a simple Kanban. The idea is that if you can build a simple application, you can probably build something more complex after that. The first application is always the hardest.</p>

            <p>In addition to fundamental React knowledge, you will pick up design techniques as you develop the application step by step and learn to understand it in detail.</p>
        </Product>

        <Product right src="http://reactkungfu.com/assets/images/rbe-cover.png" title="React.js by example" author="Arkency">
            <p>We think that React.js is the best choice when it comes to build dynamic frontends. We used it in <b>5 big projects we were working on</b>. We got <b>over 2000+ hours of experience</b> with it. And we want to share our knowledge with you - and we already do. We got a Rails meets React.js book, aimed to Ruby on Rails developers. We’ve created and maintain the React.js koans (2000+ stars on GitHub already!).</p>

            <p>We wrote <b>a book which is a perfect entry point</b> to this world of the modern JavaScript tooling. It’s not a full ES2015 bible, nor is it a full React.js API description. We went straight to the main value - how you can implement typical UI widgets. This is the focus on the book, <b>as many practical examples as possible</b>. You will learn different ways of approaching a typical JavaScript task - building a specific widget.</p>
        </Product>
    </div>
);
