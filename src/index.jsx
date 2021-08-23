import React from 'react';
import { render } from 'react-dom';

function App() {
    return (
        <React.Fragment>
            <h1>Webpack page.</h1>
            <div className="container">
                <div className="logo"></div>
            </div>
            <div className="less-box">
                <h2>less</h2>
            </div>
            <div className="sass-box">
                <h2>sass</h2>
            </div>
            <pre />
        </React.Fragment>
    );
}

render(<App />, document.getElementById('app'));
