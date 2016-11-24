import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import { Menu, Jumbotron, JumbotronFooter } from './Header';
import { LightSection, DarkSection, DripButton, HighLightSection } from './Section';

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
                    </LightSection>

                    <DarkSection hasTop="rightSlope"
                                 hasBottom="zigZag">
                        <Content.WhyPain />
                    </DarkSection>

                    <HighLightSection id="what" hasBottom="arrow">
                        <Content.What />
                    </HighLightSection>

                    <LightSection>
                        <Content.AllTheThings />
                    </LightSection>

                    <DarkSection id="authors" hasTop="triangleInverted"
                                 hasBottom="leftSlope">
                        <Content.Authors />
                    </DarkSection>

                    <LightSection id="packages">
                        <Content.Packages />
                    </LightSection>

                    <DarkSection hasTop="triangleInverted">
                        <footer id="footer" role="contentinfo">
                            <JumbotronFooter />
                        </footer>
                    </DarkSection>
                </div>
            </div>
        );
    }
}

export default App;
