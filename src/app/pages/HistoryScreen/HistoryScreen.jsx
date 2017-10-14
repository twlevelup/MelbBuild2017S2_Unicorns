import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import History from './Component/History/History';
import './HistoryScreen.css';

export const HistoryScreen = ({ historys }) => {
  return (
    <div id='history-screen' className='history-screen'>
      <h1 className='title'>History</h1>
      <GenericList
        className='history-list'
        items={ historys }
        listItem={ History }
      />
    </div>
  );
};

HistoryScreen.propTypes = {
  historys: arrayOf(shape({
    Title: string,
    Department: string,
    Status: string,
  })).isRequired,
};

export const HistoryScreenButtons = {
  LEFT: () => ButtonAction.goToPage({ pathname: '/job_detail', state: { jobId: 1 } }),
  RIGHT: () => ButtonAction.goToPage('/'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(HistoryScreen, HistoryScreenButtons);
