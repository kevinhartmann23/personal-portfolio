// import React from 'react'

interface WorkHistory {
  title: string
  company: string
  duration: string
  description: string[]
  icon: string
}

const workHistory: WorkHistory[] = [
  {
    title: 'Associate Software Engineer',
    company: 'Cognizant',
    duration: 'June 2021 - Present',
    description: [
      'Efficiently developed and delivered 12-week proof of concept applications from project inception to hand-off',
      'Work closely with business industry professionals, product owners, and other stakeholders in various industries (health care, banking financial services, insurance, communication media technologies) to learn industry standards, procedures, and terminology to deliver a strong, knowledgeable product.',
      'Communicated with partner teams in India to deliver the POCs for continued work and features, this required thorough documentation, clear communication and organization, intensive planning, and developer empathy.',
      'Implementing various full-stack languages, technologies, and frameworks based on the project’s needs: AWS / Circle CI / Material UI / Mongo DB / Docker / React / Angular / Rasa / Spacy / Python / Node / Express / ES6 / TypeScript / Cypress / Jest / Terraform / Azure',
    ],
    icon: 'cs',
  },
  {
    title: 'Admission Interviewer',
    company: 'Turing School Of Software and Design',
    duration: 'August 2021 - Present',
    description: [
      'Conduct behavioral and technical interviewers for prospective students.',
      'Communicate with admissions department through extensive documentation to relay interviewee’s evaluations',
      'Represent the educational institute as a first impression, delivering all information necessary for student success',
    ],
    icon: 'school',
  },
  {
    title: 'Frontend Software Engineer',
    company: 'Turing School Of Software and Design',
    duration: 'August 2020 - May 2021',
    description: [
      '1500 + Hours of coding experience in fundamental JS, HTML, CSS, and various front end frameworks and libraries.',
      'Extensive experience using Git, Command Line Interface, and GitHub.',
      'Project management skills, project planning, and app architecture work.',
      'Group, paired, and solo project work - all in a remote setting',
    ],
    icon: 'cs',
  },
  {
    title: 'Restaurant & Hospitality Manager',
    company: 'Various Local Colorado Restaurants',
    duration: 'August 2011 - June 2020',
    description: [
      'Chef, Sous Chef, Kitchen Manager: Inventory, Menu Design, Product Sourcing and Ordering, Quality Control',
      'General Manager: Budgetting, Payroll, Staff Management, Training, Guest Experience',
      'Operations Manager: Licensing, Culture, Business Operations, Standard Operating Procedures, Taxes, Company Operations',
    ],
    icon: 'food',
  },
]

export default workHistory
