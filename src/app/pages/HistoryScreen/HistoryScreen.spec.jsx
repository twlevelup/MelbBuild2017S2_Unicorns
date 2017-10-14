import React from 'react';
import { shallow, render } from 'enzyme';
import { HistoryScreen, HistoryScreenButtons } from './HistoryScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import historys from '../../data/jobdb.json';

jest.mock('../../../framework/util/ButtonAction');

describe('HistoryScreen component', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    componentWrapper = shallow(
      <HistoryScreen historys={ historys } />
    );
  });

  it('should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should have class[history-screen]', () => {
    expect(componentWrapper).toHaveClassName('history-screen');
  });

  it('should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });

  it('should have a LEFT button config of going to Home Page', () => {
    HistoryScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/job_detail', state: { jobId: 1 } });
  });

  it('should have a RIGHT button config of going to Home page', () => {
    HistoryScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('should have a TOP button config of scrolling up', () => {
    HistoryScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  it('should have a BOTTOM button config of scrolling down', () => {
    HistoryScreenButtons.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });

  it('should contain History 1', () => {
    const wrapper = render(<HistoryScreen historys={ historys } />);
    expect(wrapper.text()).toContain('History');
  });
});
