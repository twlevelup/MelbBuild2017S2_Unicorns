import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import GenericList from '../../../framework/components/GenericList/GenericList';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import Job from './components/Job/Job';
import './job_detail.css';

export const JobDetailScreen = ({ jobs }) => {
  return (
    <div id='contact-screen' className='job-screen'>
      <h1 className='title'>Job Details</h1>
      <GenericList
        className='job-list'
        items={ jobs }
        listItem={ Job }
      />
    </div>
  );
};

JobDetailScreen.propTypes = {
  jobs: arrayOf(shape({
    JobId: string,
    Title: string,
    Company: string,
  })).isRequired,
};

export const JobDetailScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/counter'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(JobDetailScreen, JobDetailScreenButtons);
