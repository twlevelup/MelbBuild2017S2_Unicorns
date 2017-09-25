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
      <div className='JobId'>
        <b>Job ID</b>: {JobId}
      </div>
      <div className='Title'>
        <b>Job Title</b>: {Title}
      </div>
      <div className='Company'>
        <b>Company</b>: {Company}
      </div>
      <div className='Department'>
        <b>Department</b>: {Department}
      </div>
      <div className='Description'>
        <b>Description</b>: {Description}
      </div>
      <div className='Salary'>
        <b>Salary</b>: {Salary}
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
