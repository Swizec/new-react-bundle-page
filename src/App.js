import React, { Component } from 'react';

import { Menu, Jumbotron } from './Header';
import { LightSection, DarkSection } from './Section';

import * as Content from './Content';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />

                <div id="content" role="main">
                    <Jumbotron />

                    <LightSection id="why">
                        <Content.WhyLove />
                    </LightSection>

                    <DarkSection hasTop="rightSlope"
                                 hasBottom="zigZag">
                        <Content.WhyPain />
                    </DarkSection>

                    <LightSection id="what">
                        <Content.What />
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
