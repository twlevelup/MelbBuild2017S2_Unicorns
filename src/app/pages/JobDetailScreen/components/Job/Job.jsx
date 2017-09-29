import React from 'react';
import { string, number } from 'prop-types';

const Job = (props) => {
  const {
    JobId,
    Title,
    Department,
    Company,
    Description,
    Salary,
  } = props;

  return (
    <div className='job'>
      <h2 className='title'>{Title}</h2>
      <div className='JobId'>
        <b>ID</b>: {JobId}
      </div>
      <div className='Company'>
        <div className='jobTitles'>Company</div>{Company}
      </div>
      <div className='Department'>
        <div className='jobTitles'>Department</div>{Department}
      </div>
      <div className='Description'>
        <div className='jobTitles'>Description</div>{Description}
      </div>
      <div className='Salary'>
        <div className='jobTitles'>Salary</div>{Salary}
      </div>
      <br />
    </div>
  );
};


Job.propTypes = {
  JobId: string.isRequired,
  Title: string.isRequired,
  Department: string,
  Company: string.isRequired,
  Description: string,
  Salary: number,
};

Job.defaultProps = {
  Department: 'Not Specified',
  Description: 'Not Specified',
  Salary: 0,
};

export default Job;
