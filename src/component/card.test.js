import { shallow } from 'enzyme';
import Card from './card.component';
import React from 'react';

it('expect to render Card Comp', () => {
    expect(shallow(<Card/>)).toMatchSnapshot()
})