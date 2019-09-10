import React from 'react';
import { render } from 'react-dom';
import './index.scss';

render(
    <div className="test">It's alive!</div>,
    document.getElementById('root') as HTMLElement,
);
