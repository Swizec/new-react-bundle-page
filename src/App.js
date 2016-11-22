import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import { Menu, Jumbotron } from './Header';
import { LightSection, DarkSection, DripButton } from './Section';

import * as Content from './Content';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />

                <div id="content" role="main">
                    <Jumbotron />

                    <LightSection id="why_react">
                        <Content.WhyLove />
                        <Row className="text-center">
                            <DripButton caption="Want!" />
                        </Row>
                    </LightSection>

                    <DarkSection hasTop="rightSlope"
                                 hasBottom="zigZag">
                        <Content.WhyPain />
                    </DarkSection>

                    <LightSection id="what">
                        <Content.What />
                    </LightSection>

                    <DarkSection id="authors" hasTop="triangleInverted"
                                 hasBottom="leftSlope">
                        <Content.Authors />
                    </DarkSection>

                    <LightSection id="packages">
                        <Content.Packages />
                    </LightSection>

                    <footer id="footer" role="contentinfo">
                        Footer
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
