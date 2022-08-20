import React from 'react';
import ReactDOM from 'react-dom';
import UsersView from './UsersView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const users = [{
    id: 2,
    name: 'SecondBite',
    discountTypes: [1]
}]
  ReactDOM.render(<UsersView users={users} actionSelectUserId={()=>{}} />, div);
});