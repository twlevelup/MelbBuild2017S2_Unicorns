import React from 'react';
import { shallow, render } from 'enzyme';
import { JobDetailScreen, JobDetailScreenButtons } from './JobDetailScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import jobs from '../../data/jobdb.json';

jest.mock('../../../framework/util/ButtonAction');

describe('JobDetailScreen component', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    componentWrapper = shallow(
      <JobDetailScreen jobs={ jobs } />
    );
  });

  it('should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should have class[job-screen]', () => {
    expect(componentWrapper).toHaveClassName('job-screen');
  });

  it('should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });

  it('should have a LEFT button config of going to Home Page', () => {
    JobDetailScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('should have a RIGHT button config of going to Counter page', () => {
    JobDetailScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/counter');
  });

  it('should have a TOP button config of scrolling up', () => {
    JobDetailScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  it('should have a BOTTOM button config of scrolling down', () => {
    JobDetailScreenButtons.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });
  it('should contain Job 1', () => {
    const wrapper = render(<JobDetailScreen jobs={ jobs } />);
    expect(wrapper.text()).toContain('Junior Web Developer');
  });
});
