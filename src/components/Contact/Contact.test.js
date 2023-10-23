import React from 'react';
import { Contact } from './Contact';
import { shallow } from 'enzyme';

describe('Contact', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
