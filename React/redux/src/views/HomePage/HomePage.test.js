import React from 'react';
import { mount } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage Component', () => {
    
   it('It should render without errors', () => {
        const component = mount(<HomePage/>);
        const wrapper   = component.find('.HomePage Component');
        expect(wrapper.length).toBe(1);
   }) 
    
    

})