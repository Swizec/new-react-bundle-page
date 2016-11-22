
import React from 'react';
import TweetEmbed from './react-tweet-embed';
import _ from 'lodash';

import { Col as Column, Row } from 'react-bootstrap';

import { SectionHeader, LightSection, Product, Author, PricingColumn } from './Section';
import { Products, BasicProducts, EpicProducts, MajesticProducts, Terms } from './Products';
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

export const Testimonial = ({ who, src, md = 12, mdOffset = 0, children }) => (
    <blockquote className="fancy-blockquote">
        <Row>
            <Column md={md} mdOffset={mdOffset}>
                <p>{children}</p>
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
        <Row className="text-center">
            <h3 className="headline hairline"><i>Here's why 300+ people bought last year's bundle</i></h3>
        </Row>
        <Row>
            <Column md={6}>
                <Testimonial who="Adam">
                    <p>There's a lot of React tutorials but very few cohesive books on the topic. Most <i>tutorials describe bits and pieces</i> of React in isolation, and it's possible to figure out how they all fit together, but it would be nice to have a single resource that builds a larger application and describes the typical workflow and project structure. I <i>prefer books over tutorials</i> because of the <i>consistency</i> of one (or a few) author's <i>approach to building apps</i> and the tools they use.</p>
                    <p>The videos and sample projects are nice bonuses, but the <i>books were the reason I purchased</i> the bundle.</p>
                </Testimonial>
            </Column>

            <Column md={6}>
                <Testimonial who="Dan">
                    <p>Started survive.js and wanted to support the author. Planned on doing it directly, but once I saw the ability to expand my knowledge into d3 and Native, it was a simple choice.</p>
                    <p>My overall <i>goal is to become fluent in React/Redux</i> and GraphQL as my front-end stack, in a functional style (as opposed to class-based style). My next purchase will probably be Eric Ellias’s JS education bundle.</p>
                    <p>I have a <i>strong background</i> in programming, but <i>my js-fu is so-so</i>, so this seemed like a <i>good jumpstart into React</i> (and help shore up the old js).</p>
                    <p>React rocks for tons of reasons, but the main reason I chose to learn more, I watched Dan Abromov’s talk about redux. <i>When I can see such simplistic beauty unfold</i>, it is too enticing not to figure it out.</p>
                </Testimonial>
            </Column>
        </Row>

        <Row>
            <Column md={6}>
                <Testimonial who="Shawn">
                    <p>I purchased it because I’m interested in learning it here over the holidays and it seemed like <i>the best deal for the quality in content</i>. There are a lot of resources online that talk about it at a surface level but nothing that actually <i>dives into real-world use cases</i>. I’m hoping for more than the usual ToDo single-page app tutorial.</p>
                </Testimonial>
            </Column>

            <Column md={6}>
                <Testimonial who="Jaime">
                    <p>I am a <i>beginner web developer</i>, so far I have a little bit of experience with angular which has changed what I want to develop and how very drastically.</p>
                    <p>I intend to <i>add react to my skill sets</i> by diving into it in the next few weeks once I am finished with my current project, the bundle came in just at the right time to help me prepare for that.</p>
                </Testimonial>
            </Column>
        </Row>

        <Row>
            <Column md={6}>
                <Testimonial who="Midhun">
                    <p><i>Thanks for the awesome bundle!</i> My team just wrapped up a project <i>here at Bloomberg</i> using Angular for the front end. Angular was definitely useful but it really made us fret over few performance issues as our app grew, towards the end of the project.</p>
                    <p>I'm <i>planning on introducing react to my team</i> for our next project and was looking for resources for myself to learn for a long time now.</p>
                </Testimonial>
            </Column>
        </Row>

        <Row>
            <Column md={5} mdOffset={4}>
                <Tweet id={TestimonialTweets[0]} />
            </Column>
        </Row>
    </div>
);

export const What = () => (
    <div>
        <SectionHeader headline="What you get"
                       subline="Books 📚 video courses 📽 and more 🙌🏼" />

        {Products.filter(p => p.listed).map(({ body, ...props }, i) => (
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
                       subline="Pick the bundle that works for you" />

        <Row>
            <PricingColumn name="Basic Bundle" price="69"
                           items={BasicProducts}
                           darkItems={EpicProducts.concat(MajesticProducts)}
                           terms={Terms.basic}
                           md={4} />

            <PricingColumn name="Epic Bundle" price="195"
                           items={BasicProducts.concat(EpicProducts)}
                           darkItems={MajesticProducts}
                           terms={Terms.epic}
                           md={4}
                           featured />

            <PricingColumn name="Majestic Bundle" price="450"
                           items={BasicProducts.concat(EpicProducts,
                                                       MajesticProducts,
                                                       Terms.majestic)}
                           md={4} />
        </Row>
    </div>
);
