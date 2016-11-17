
import React from 'react';

import survivejs_react from './covers/survivejs_react.png';
import survivejs_webpack from './covers/survivejs_webpack.png';
import rbe_cover from './covers/rbe-cover.png';
import reactd3_cover from './covers/reactd3_cover.png';

export const Products = [
    {
        src: "https://youtu.be/fKiSEXHQoM8",
        title: "Modern React with Redux",
        author: "Stephen Grider",
        body: (<div>
            <p>Master the fundamentals of React and Redux with this tutorial as you develop apps supported by NPM, Webpack, and ES6</p>
            <p>This is the tutorial you've been looking for to master modern web development with React.</p>

            <p><b>Redux?</b> We got it. <b>ES6/Babel?</b> Covered. <b>Webpack?</b> Included!</p>

            <p>Mastering React and Redux can get you a position in web development or help you build that personal project you've been dreaming of. It's a skill that will put you more in demand in the modern web development industry, especially with the release of Redux and ReactNative.</p>
        </div>)
    },

    {
        src: survivejs_react,
        title: "SurviveJS - React",
        author: "Juho Vepsäläinen",
        body: (<div>
            <p>SurviveJS - React shows you how to build a simple Kanban. The idea is that if you can build a simple application, you can probably build something more complex after that. The first application is always the hardest.</p>

            <p>In addition to fundamental React knowledge, you will pick up design techniques as you develop the application step by step and learn to understand it in detail.</p>
        </div>)
    },

    {
        src: rbe_cover,
        title: "React.js by example",
        author: "Arkency",
        body: (<div>
            <p>We think that React.js is the best choice when it comes to build dynamic frontends. We used it in <b>5 big projects we were working on</b>. We got <b>over 2000+ hours of experience</b> with it. And we want to share our knowledge with you - and we already do. We got a Rails meets React.js book, aimed to Ruby on Rails developers. We’ve created and maintain the React.js koans (2000+ stars on GitHub already!).</p>

            <p>We wrote <b>a book which is a perfect entry point</b> to this world of the modern JavaScript tooling. It’s not a full ES2015 bible, nor is it a full React.js API description. We went straight to the main value - how you can implement typical UI widgets. This is the focus on the book, <b>as many practical examples as possible</b>. You will learn different ways of approaching a typical JavaScript task - building a specific widget.</p>
        </div>)
    },

    {
        src: "https://youtu.be/N-Wnb9Sk1xw",
        title: "React Native Quickly",
        author: "Azat Mardan",
        body: (<div>
            <p>Start Learning Native iOS Development with JavaScript</p>
            <p>This ebook and screencasts will walk you through developing two mobile iOS app using React Native: Timer and Weather apps.</p>
        </div>)
    },

    {
        src: survivejs_webpack,
        title: "SurviveJS - Webpack",
        author: "Juho Vepsäläinen",
        body: (<div>
            <p>The early part of the book explains why Webpack is needed, shows you how to develop Webpack configuration of your own step by step, and then moves onto more advanced topics.</p>

            <p>I chose an approach that allows me to discuss one technique at a time. This makes the book handy for reference.</p>

            <p>The book covers actually more than just Webpack. You will learn also about the surrounding ecosystem. This means you will learn to improve the quality of your code using tools such as ESLint. There are also React specific tips given this book originates from the first one.</p>
        </div>)
    },


    {
        src: "https://youtu.be/9rLplsL7ZG8",
        title: "Advanced React and Redux",
        author: "Stephen Grider",
        body: (<div>
            <p>Detailed walkthroughs on advanced React and Redux concepts - Authentication, Testing, Middlewares, HOC's, and Deployment</p>
            <p>This is the tutorial you've been looking for to take your React and Redux skills to the next level.</p>

            <p><b>Authentication with Express/Mongo?</b> Yes! <b>Middleware/Higher Order Components?</b> We got it. <b>Testing with Mocha/Chai?</b> It's here!</p>
        </div>)
    },

    {
        src: reactd3_cover,
        title: "React + d3js ES6",
        author: "Swizec Teller",
        body: (<div>
            <p>Did you know <b>software engineers make $20,000 more than programmers</b>? I had no idea it was that bad until I built some shiny graphs and saw the difference. I never called myself a programmer again.</p>

            <p>But creating dynamic and interactive data visualizations on the web is a pain in the ass.</p>

            <p>You want a <b>quick way to build complex visualizations</b>. Build once, use everywhere. In every project.</p>

            <p>With <b>React+d3js ES6</b> you'll learn how to build re-usable visualization components in about an hour.</p>
            <p><b>New edition coming in December. You get it for free</b> with this bundle.</p>
        </div>)
    },

    {
        src: "https://youtu.be/uRaOyXg3PE0",
        title: "The Complete React Native and Redux Course",
        author: "Stephen Grider",
        body: (<div>
            <p>iOS and Android App Development from scratch - build fully native mobile apps ridiculously fast!</p>
            <p>If you're tired of spinning your wheels learning Swift or Android, this is the course for you.</p>

            <p><b>Authentication?</b> You will learn it.  <b>Redux?</b> Included.  <b>Animations?</b> Of course!</p>

            <p>This course will get you up and running with React Native quickly, and teach you the core knowledge you need to deeply understand and build React components for mobile devices.</p>
        </div>)
    },


    {
        src: "https://youtu.be/CI617-BE-Jo",
        title: "Meteor and React for Realtime Apps",
        author: "Stephen Grider",
        body: (<div>
            <p>Master the fundamentals of Meteor and React with this tutorial as you develop secure, dynamic apps</p>
            <p>This is the tutorial you've been looking for to master building dynamic web apps with Meteor JS, with all the most important topics covered in great depth!</p>

            <p><b>Authentication?</b>  Covered.  <b>Routing?</b>  Of course!  <b>Security?</b> We got it.</p>
        </div>)
    },

    {
        src: "https://youtu.be/FLfpQ8n_M4s",
        title: "ES6 Javascript: The Complete Developer's Guide",
        author: "Stephen Grider",
        body: (<div>
            <p>ES6 Javascript Development from scratch. Get practice with live examples and learn exactly where to apply ES6 features.</p>
            <p>This is the tutorial you've been looking for to master ES6 Javascript.</p>

            <p><b>Generators?</b> We got it. <b>Arrow Functions?</b> Of course. <b>Rest/Spread Operator?</b> Included! And every other new piece of syntax!</p>
        </div>)
    }

];
