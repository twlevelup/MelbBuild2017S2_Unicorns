import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './JobPost.css';

export const JobPostScreenComponent = ({ jobs }) => {
  return (
    <div id='Job Post'>
      <div id='job-posts-container'>
        <div>
          <h1 id='job-title'>{ jobs[0].Title }</h1>
          <p id='job-tags'>Matching tags: { jobs[0].Tags.join(', ') }</p>
        </div>
      </div>
    </div>
  );
};

JobPostScreenComponent.propTypes = {
  jobs: arrayOf(shape({
    Title: string,
    Tags: arrayOf(string),
  })).isRequired,
  // jobId: string.isRequired,
};

export const JobPostScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/job_detail'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
  SCREEN: () => ButtonAction.goToPage('/job_detail'),
};

export default WithButtonConfigs(JobPostScreenComponent, JobPostScreenButtons);
