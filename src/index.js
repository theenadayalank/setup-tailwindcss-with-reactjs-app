import React from 'react';
import { render } from 'react-dom';
import './style.css';

const rootElement = document.getElementById('react-app');

render(<div className="text-pink-600 text-center text-5xl"> Hello World! </div>, rootElement);