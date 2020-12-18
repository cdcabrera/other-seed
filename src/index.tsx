import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import '@patternfly/react-core/dist/styles/base.css';
import './index.scss';

/**
 * Main function
 */
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
