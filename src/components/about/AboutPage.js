import React, { Component } from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This application uses React, Redux, React-Router and a variety of other helpful libraries and development tools.</p>
      <div className="content">
        <p>The pre-configured modern dev enrionment includes:</p>
        <ul>
          <li><strong>Babel</strong> - transpiling ES6/7 features into browser-compatibilty JavaScript</li>
          <li><strong>Webpack</strong> - JS module bundling</li>
          <li><strong>ESLint</strong> - Code linting </li>
          <li><strong>Mocha</strong> - Unit testing</li>
          <li><strong>Express</strong> - Serving the app locally</li>
          <li><strong>npm Scripts</strong> - Running CLI commands to efficiently combine and the dev tools</li>
        </ul>
        <p>Just type <code>npm start</code> from the project directory to begin!</p>
      </div>
    </div>
  );
};

export default AboutPage;
