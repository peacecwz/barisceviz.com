import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import Home from './containers/Home/Home';
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
