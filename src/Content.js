
import React from 'react';
import TweetEmbed from './react-tweet-embed';

import { Col, Row } from 'react-bootstrap';

import { SectionHeader } from './Section';

export const WhyLove = () => (
    <div>
        <SectionHeader headline="Build better webapps faster"
                       subline="Why engineers ❤️ React" />

        <Row>
            <Col md={5} mdOffset={1}>
                <TweetEmbed id="797773630654607360" options={{conversation: 'none'}} />
            </Col>
            <Col md={5}>
                <TweetEmbed id="797775591156158464" options={{conversation: 'none'}} />
            </Col>
        </Row>
    </div>
);

export const WhyPain = () => (
    <div>
        Hai
    </div>
);
