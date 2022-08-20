import React from 'react';
import ReactDOM from 'react-dom';
import ProductView from './ProductView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductView title='test' actionChangeNumber={()=>{}}/>, div);
});