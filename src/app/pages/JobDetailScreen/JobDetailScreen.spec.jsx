import React from 'react';
import { mount } from 'enzyme';
import { JobDetailScreen } from './JobDetailScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('JobDetailScreen component', () => {
  let componentWrapper;
  let onLoadRemapButtons;

  beforeEach(() => {
    onLoadRemapButtons = jest.fn();
    componentWrapper = mount(<JobDetailScreen remapButtons={ onLoadRemapButtons } />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should contain a Job component', () => {
    expect(componentWrapper.find('Job')).toBePresent();
  });

  it('should have a LEFT button config of going to Job List Page', () => {
    componentWrapper.instance().buttonActions.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/jobpost', state: { jobId: 1 } });
  });

  it('should have a RIGHT button config of going to Counter page', () => {
    componentWrapper.instance().buttonActions.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/counter');
  });

  it('should have a TOP button config of scrolling up', () => {
    componentWrapper.instance().buttonActions.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  it('should have a BOTTOM button config of scrolling down', () => {
    componentWrapper.instance().buttonActions.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });
});
