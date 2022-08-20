import React from 'react';
import ReactDOM from 'react-dom';
import SummaryView from './SummaryView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryView price={10} />, div);
});