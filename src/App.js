import React, { Component } from 'react';

import { Menu, Jumbotron } from './Header';
import { LightSection, SectionHeader } from './Section';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />

                <div id="content" role="main">
                    <Jumbotron />

                    <LightSection>
                        <SectionHeader headline="Build better websites faster" subline="yay more things to say" />
                        <p>
                            Remember when making a website meant slapping some jQuery onto a PHP backend you built over the weekend? Fun!
                        </p>
                        <p>
                            Remember when you then had to update that website and couldn't spend time with your friends because the server was on fire? Lame.
                        </p>
                        <p>
                            Use React, spend more time with friends, and make more money. The average salary for a React engineer in San Francisco is $153,000/year.
                        </p>
                        <p>
                            React Indie Bundle will give you everything you need to learn React, have some fun, and see if it fits your project.
                        </p>
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
