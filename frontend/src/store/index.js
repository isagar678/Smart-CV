import { proxy } from 'valtio';

export  const resumeState = proxy({
  resumeID: 0,
});

export const formState = proxy({
  name: 'Ann Hill',
  skills: ['Sales Expertise', 'Customer Relationship Management', 'Team Leadership'],
  certificates: ['Data Modeling by Coursera', 'JavaScript and Python by Udemy'],
  workHistory: [
    {
      position: 'Retail Sales Associate',
      company: 'TechStyle Fashion Group',
      location: 'Sandusky, OH',
      startDate: '03/2023',
      endDate: 'Present',
      responsibilities: 'Handled customer transactions, returns, and assisted with product inquiries to drive sales.',
    },
  ],
  education: ['Associate of Applied Science in Business Management, Ohio Business College'],
  contactNo: '555-123-4567',
  email: 'ann.hill@example.com',
  address: 'Sarkhej, Ahmedabad, Gujarat, India',
  projects: [
    'Developed a CRM system to enhance customer service and efficiently track orders.',
    'Built an inventory management application to optimize stock levels and reduce product shortages for a small retail business.',
  ],
  professionalSummary: 'Reliable and detail-oriented sales associate with exceptional customer service and communication skills, consistently driving sales performance in a fast-paced retail environment.',
});
