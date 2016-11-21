
import React from 'react';
import TweetEmbed from './react-tweet-embed';
import _ from 'lodash';

import { Col as Column, Row } from 'react-bootstrap';

import { SectionHeader, LightSection, Product, Author, PricingColumn } from './Section';
import { Products } from './Products';
import { Authors as AuthorData } from './Authors';

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

        {Products.map(({ body, ...props }, i) => (
            <Product left={i%2 === 0} right={i%2 === 1} first={i === 0} key={i}
                     {...props}>
                {body}
            </Product>
         ))}
    </div>
);

export const Authors = () => (
    <div>
        <SectionHeader headline="Authors 🚶"
                       subline="The indie authors behind React Indie Bundle" />

        <Row>
            {_.take(AuthorData, 3).map(props => (
                <Column md={4} key={props.name}>
                    <Author {...props} />
                </Column>
             ))}
        </Row>
        <Row>
            <Column md={2} />
            {_.takeRight(AuthorData, 2).map(props => (
                <Column md={4} key={props.name}>
                    <Author {...props} />
                </Column>
             ))}
        </Row>
    </div>
);

export const Packages = () => (
    <div>
        <SectionHeader headline="React Indie Bundle Packages"
                       subline="The best combination for you" />

        <Row>
            <PricingColumn name="Basic" price="50"
                           items={Products.filter(p => ['basic'].includes(p.package))} />

            <PricingColumn name="Epic" price="50"
                           items={Products.filter(p => ['basic',
                                                        'epic'].includes(p.package))} />

            <PricingColumn name="Epic" price="50"
                           items={Products.filter(p => ['basic',
                                                        'epic',
                                                        'majestic'].includes(p.package))} />
        </Row>
    </div>
);
