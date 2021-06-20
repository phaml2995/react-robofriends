import { shallow } from 'enzyme';
import CardList from './cardList.component';
import React from 'react';

it('expect to render Card Comp', () => {
    const mock = [
        {
            id: 1,
            name: 'john snow',
            username: 'johnjohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mock} />)).toMatchSnapshot()
})