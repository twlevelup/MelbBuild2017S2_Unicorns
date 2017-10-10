import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const HomeScreenComponent = ({ userdb }) => {
  return (
    <div id='watch-home-page'>

      <div id='home-page-content'>
        <img src='../../../app/pages/HomeScreen/profile.png' alt='User Profile' style={ { width: '50px' } } />
        <h2>{userdb[0].Name}</h2>
        <p>Tags:
          {userdb[0].Tags.join(', ') }
        </p>
        <div className='progress'>
          <div className='progress-bar progress-bar-success' style={ { width: '35%' } } />
          <div className='progress-bar progress-bar-warning' style={ { width: '20%' } } />
          <div className='progress-bar progress-bar-danger' style={ { width: '10%' } } />
        </div>
      </div>
    </div>
  );
};

HomeScreenComponent.propTypes = {
  userdb: arrayOf(shape({
    Name: string,
    Image: string,
    Tags: arrayOf(string),
  })).isRequired,
};

export const HomeScreenButtons = {
  LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  RIGHT: () => ButtonAction.goToPage('/jobpost'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(HomeScreenComponent, HomeScreenButtons);
