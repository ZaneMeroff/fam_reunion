import React from 'react';
import { SimonGame } from './SimonGame';
import { shallow } from 'enzyme';

describe('SimonGame', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SimonGame />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
