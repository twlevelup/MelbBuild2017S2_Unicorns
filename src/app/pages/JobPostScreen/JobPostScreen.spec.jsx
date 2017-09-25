import React from 'react';
import { shallow } from 'enzyme';
import { JobPostScreenComponent, JobPostScreenButtons } from './JobPostScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<JobPostScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<JobPostScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display the Job Title', () => {
    expect(componentWrapper.find('#job-title')).toHaveText('Job Title');
  });

  it('should display mathcing job tags', () => {
    expect(componentWrapper.find('#job-tags')).toIncludeText('Matching tags:');
  });

  describe('NewsScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      JobPostScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to Job Detail page', () => {
      JobPostScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/job_detail');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      JobPostScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      JobPostScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });
  });
});
