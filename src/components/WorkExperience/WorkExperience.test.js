import React from 'react';
import { WorkExperience } from './WorkExperience';
import { shallow } from 'enzyme';

describe('WorkExperience', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WorkExperience />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
