import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreenComponent, HomeScreenButtons } from './HomeScreen';
import userdb from '../../../app/data/userdb.json';
// import Date from '../../../framework/components/Date/Date';
// import Time from '../../../framework/components/Time/Time';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('HomeScreenComponent component', () => {
  let homeScreenComponent;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage', 'scrollUp', 'scrollDown');
    homeScreenComponent = shallow(<HomeScreenComponent userdb={ userdb } />);
  });

  test('it should have a LEFT button config of going to Counter Page with an initial number value of 5', () => {
    HomeScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/counter', state: { number: 5 } });
  });

  test('it should have a RIGHT button config of going to Job Post page', () => {
    HomeScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/jobpost');
  });

  test('it should have a TOP button config of scrolling page up', () => {
    HomeScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of scrolling page down', () => {
    HomeScreenButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
  test('it should have a user name', () => {
    expect(homeScreenComponent).toContainReact(<h2>Davis</h2>);
  });
  test('it should have an image', () => {
    expect(homeScreenComponent).toContainReact(
      <img src='../../../app/pages/HomeScreen/profile.png' alt='User Profile' style={ { width: '50px' } } />);
  });
  test('it should have tags', () => {
    expect(homeScreenComponent).toContainReact(<p>Tags:
          {userdb[0].Tags.join(', ') }</p>);
  });
  test('it should have a progress bar', () => {
    expect(homeScreenComponent).toContainReact( <div className='progress'>
          <div className='progress-bar progress-bar-success' style={ { width: '35%' } } />
          <div className='progress-bar progress-bar-warning' style={ { width: '20%' } } />
          <div className='progress-bar progress-bar-danger' style={ { width: '10%' } } />
        </div>);
  });
});
