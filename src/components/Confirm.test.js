import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from './Confirm';

it('Confirm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Confirm />, div);
});
