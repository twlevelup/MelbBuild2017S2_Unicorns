import React from 'react';
import { shallow } from 'enzyme';
import Job from './Job';

describe('Job', () => {
  const defaultProps = {
    JobId: '1',
    Title: 'Junior Web Developer',
    Department: '???',
    Company: '???',
    Description: '???',
    Salary: 50000,
  };

  const composeComponent = (props = {}) =>
    shallow(<Job { ...defaultProps } { ...props } />);

  test('It displays id, title, department, company, description, salary', () => {
    const jobs = [{
      JobId: '1',
      Title: 'Junior Web Developer',
      Department: '???',
      Company: '???',
      Description: '???',
      Salary: 60000,
    }, {
      JobId: '2',
      Title: 'Senior Accountant',
      Department: '???',
      Company: '???',
      Description: '???',
      Salary: 50000,
    },
    ];
    jobs.forEach((job) => {
      const component = composeComponent(job);
      expect(component.find('.JobId').text()).toEqual(`ID: ${ job.JobId }`);
      expect(component.find('.title').text()).toEqual(`${ job.Title }`);
      expect(component.find('.Department').text()).toEqual(`Department${ job.Department }`);
      expect(component.find('.Company').text()).toEqual(`Company${ job.Company }`);
      expect(component.find('.Description').text()).toEqual(`Description${ job.Description }`);
      expect(component.find('.Salary').text()).toEqual(`Salary${ job.Salary }`);
    });
  });

  test('it should have className "job"', () => {
    expect(composeComponent()).toHaveClassName('job');
  });
});
