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

                    <DarkSection hasTop="rightAngle">
                        <Content.WhyPain />
                    </DarkSection>

                    <footer id="footer" role="contentinfo">
                        Footer
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
