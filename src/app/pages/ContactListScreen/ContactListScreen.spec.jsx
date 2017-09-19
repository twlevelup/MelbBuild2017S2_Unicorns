import React from 'react';
import { shallow, render } from 'enzyme';
import { ContactListScreen, ContactScreenButtons } from './ContactListScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import contacts from '../../data/contacts.json';

jest.mock('../../../framework/util/ButtonAction');

describe('ContactListScreen component', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    componentWrapper = shallow(
      <ContactListScreen contacts={ contacts } />
    );
  });

  it('should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should have class[contact-screen]', () => {
    expect(componentWrapper).toHaveClassName('contact-screen');
  });

  it('should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });

  it('should have a LEFT button config of going to Home Page', () => {
    ContactScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('should have a RIGHT button config of going to Counter page', () => {
    ContactScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/counter');
  });

  it('should have a TOP button config of scrolling up', () => {
    ContactScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  it('should have a BOTTOM button config of scrolling down', () => {
    ContactScreenButtons.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });
  it('should contain Contact 1', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Contact 1');
  });
  it('should contain Varun', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Varun');
  });

  it('should contain Jeff', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Jeff');
  });

  it('should contain Contact Hazim Jumali', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Hazim Jumali');
  });

  it('should contain Fibby', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Fibby');
  });
  it('should contain Namibia', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Namibia');

  it('should contain Jeff Lim', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Jeff Lim');
  });

  it('should contain Davis Hong', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Davis Hong');
  });
});
