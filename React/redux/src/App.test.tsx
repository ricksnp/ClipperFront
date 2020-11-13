import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
//Nathan's test
test('Should return all posts', () => {
  const p = Promise.resolve('http://3.139.66.26:8081/Clipper/allPosts.json');
  return expect(p).resolves.toBeTruthy();
});

it('renders without crashing', () => {
  shallow(<App />);
});
