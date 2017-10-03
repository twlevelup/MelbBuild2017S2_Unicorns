import React from 'react';
import { shallow } from 'enzyme';
import { JobDetailScreen, JobDetailScreenButtons } from './JobDetailScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('JobDetailScreen component', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    componentWrapper = shallow(
      <JobDetailScreen />
    );
  });

  it('should have class[job-screen]', () => {
    expect(componentWrapper).toHaveClassName('job-screen');
  });

  it('should contain a Job component', () => {
    expect(componentWrapper.find('Job')).toBePresent();
  });

  it('should have a LEFT button config of going to Job List Page', () => {
    JobDetailScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/jobpost');
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
});
