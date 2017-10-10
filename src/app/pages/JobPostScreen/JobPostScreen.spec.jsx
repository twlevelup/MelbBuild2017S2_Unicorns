import React from 'react';
import { mount } from 'enzyme';
import { JobPostScreenComponent } from './JobPostScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import jobs from '../../data/jobdb.json';

jest.mock('../../../framework/util/ButtonAction');

describe('<JobPostScreenComponent />', () => {
  let componentWrapper;
  let onLoadRemapButtons;

  beforeEach(() => {
    onLoadRemapButtons = jest.fn();
    componentWrapper = mount(<JobPostScreenComponent remapButtons={ onLoadRemapButtons } />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display the job 1 by default', () => {
    expect(componentWrapper.find('#job-title')).toHaveText(jobs[1].Title);
  });

  it('should display mathcing job tags', () => {
    expect(componentWrapper.find('#job-tags')).toIncludeText(jobs[1].Tags.join(', '));
  });

  it('it should have a RIGHT button config going to next job', () => {
    componentWrapper.instance().buttonActions.RIGHT();
    expect(componentWrapper.find('#job-title')).toHaveText(jobs[2].Title);
    expect(componentWrapper.find('#job-tags')).toIncludeText(jobs[2].Tags.join(', '));
  });

  it('it should have a LEFT button config going to previous job', () => {
    componentWrapper.instance().buttonActions.LEFT();
    expect(componentWrapper.find('#job-title')).toHaveText(jobs[0].Title);
    expect(componentWrapper.find('#job-tags')).toIncludeText(jobs[0].Tags.join(', '));
  });

  it('it should have a SCREEN button config of going to Jobs Details page', () => {
    componentWrapper.instance().buttonActions.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/job_detail', state: { jobId: 2 } });
  });

  it('it should have a BOTTOM button config of going to home page', () => {
    componentWrapper.instance().buttonActions.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });
});
