import { Lead } from '@/types/lead';

export const mockLeads: Lead[] = [
  // Initial Review - Pending
  {
    id: '1',
    name: 'Acme Corporation',
    email: 'contact@acmecorp.com',
    phone: '+1 (555) 123-4567',
    website: 'www.acmecorp.com',
    currentRevenue: 250000,
    stage: 'initial_review',
    status: 'pending',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'TechStart Inc',
    email: 'hello@techstart.io',
    phone: '+1 (555) 234-5678',
    website: 'www.techstart.io',
    currentRevenue: 500000,
    stage: 'initial_review',
    status: 'pending',
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: '3',
    name: 'Digital Solutions Ltd',
    email: 'info@digitalsolutions.com',
    phone: '+1 (555) 345-6789',
    website: 'www.digitalsolutions.com',
    currentRevenue: 150000,
    stage: 'initial_review',
    status: 'pending',
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17')
  },
  // Initial Review - Disqualified
  {
    id: '4',
    name: 'Small Biz Co',
    email: 'owner@smallbiz.com',
    phone: '+1 (555) 456-7890',
    website: 'www.smallbiz.com',
    currentRevenue: 50000,
    stage: 'initial_review',
    status: 'disqualified',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12')
  },
  // Stage 1 - Qualified
  {
    id: '5',
    name: 'Growth Ventures LLC',
    email: 'team@growthventures.com',
    phone: '+1 (555) 567-8901',
    website: 'www.growthventures.com',
    currentRevenue: 750000,
    stage: 'stage_1',
    status: 'qualified',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-14')
  },
  {
    id: '6',
    name: 'Innovation Labs',
    email: 'contact@innovationlabs.io',
    phone: '+1 (555) 678-9012',
    website: 'www.innovationlabs.io',
    currentRevenue: 1200000,
    stage: 'stage_1',
    status: 'qualified',
    createdAt: new Date('2024-01-09'),
    updatedAt: new Date('2024-01-13')
  },
  {
    id: '7',
    name: 'Enterprise Systems Inc',
    email: 'sales@enterprisesys.com',
    phone: '+1 (555) 789-0123',
    website: 'www.enterprisesys.com',
    currentRevenue: 2500000,
    stage: 'stage_1',
    status: 'qualified',
    createdAt: new Date('2024-01-07'),
    updatedAt: new Date('2024-01-11')
  },
  {
    id: '8',
    name: 'CloudTech Partners',
    email: 'hello@cloudtech.io',
    phone: '+1 (555) 890-1234',
    website: 'www.cloudtech.io',
    currentRevenue: 900000,
    stage: 'stage_1',
    status: 'qualified',
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-10')
  },
  // Stage 1 - Disqualified
  {
    id: '9',
    name: 'Budget Services',
    email: 'info@budgetservices.com',
    phone: '+1 (555) 901-2345',
    website: 'www.budgetservices.com',
    currentRevenue: 180000,
    stage: 'stage_1',
    status: 'disqualified',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-09')
  },
  // Stage 2 - Qualified
  {
    id: '10',
    name: 'Strategic Partners Co',
    email: 'contact@strategicpartners.com',
    phone: '+1 (555) 012-3456',
    website: 'www.strategicpartners.com',
    currentRevenue: 3500000,
    stage: 'stage_2',
    status: 'qualified',
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '11',
    name: 'Market Leaders Inc',
    email: 'team@marketleaders.com',
    phone: '+1 (555) 123-4560',
    website: 'www.marketleaders.com',
    currentRevenue: 1800000,
    stage: 'stage_2',
    status: 'qualified',
    createdAt: new Date('2023-12-22'),
    updatedAt: new Date('2024-01-07')
  },
  {
    id: '12',
    name: 'Global Systems Ltd',
    email: 'info@globalsystems.com',
    phone: '+1 (555) 234-5601',
    website: 'www.globalsystems.com',
    currentRevenue: 4200000,
    stage: 'stage_2',
    status: 'qualified',
    createdAt: new Date('2023-12-18'),
    updatedAt: new Date('2024-01-06')
  },
  // Stage 2 - Disqualified
  {
    id: '13',
    name: 'Undecided Corp',
    email: 'contact@undecided.com',
    phone: '+1 (555) 345-6012',
    website: 'www.undecided.com',
    currentRevenue: 650000,
    stage: 'stage_2',
    status: 'disqualified',
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2024-01-05')
  },
  // Closing - Qualified (in negotiation)
  {
    id: '14',
    name: 'Prime Enterprises',
    email: 'deals@primeenterprises.com',
    phone: '+1 (555) 456-0123',
    website: 'www.primeenterprises.com',
    currentRevenue: 5500000,
    stage: 'closing',
    status: 'qualified',
    createdAt: new Date('2023-12-10'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: '15',
    name: 'Apex Solutions',
    email: 'contact@apexsolutions.com',
    phone: '+1 (555) 567-0134',
    website: 'www.apexsolutions.com',
    currentRevenue: 3200000,
    stage: 'closing',
    status: 'qualified',
    createdAt: new Date('2023-12-12'),
    updatedAt: new Date('2024-01-03')
  },
  // Closing - Won
  {
    id: '16',
    name: 'Victory Industries',
    email: 'team@victoryind.com',
    phone: '+1 (555) 678-0145',
    website: 'www.victoryind.com',
    currentRevenue: 7800000,
    stage: 'closing',
    status: 'won',
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '17',
    name: 'Success Group LLC',
    email: 'hello@successgroup.com',
    phone: '+1 (555) 789-0156',
    website: 'www.successgroup.com',
    currentRevenue: 2900000,
    stage: 'closing',
    status: 'won',
    createdAt: new Date('2023-12-05'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '18',
    name: 'Champion Corp',
    email: 'info@championcorp.com',
    phone: '+1 (555) 890-0167',
    website: 'www.championcorp.com',
    currentRevenue: 4100000,
    stage: 'closing',
    status: 'won',
    createdAt: new Date('2023-11-28'),
    updatedAt: new Date('2023-12-30')
  },
  // Closing - Lost
  {
    id: '19',
    name: 'Missed Opportunity Inc',
    email: 'contact@missedopp.com',
    phone: '+1 (555) 901-0178',
    website: 'www.missedopp.com',
    currentRevenue: 1500000,
    stage: 'closing',
    status: 'lost',
    createdAt: new Date('2023-11-25'),
    updatedAt: new Date('2023-12-28')
  },
  {
    id: '20',
    name: 'Almost There LLC',
    email: 'team@almostthere.com',
    phone: '+1 (555) 012-0189',
    website: 'www.almostthere.com',
    currentRevenue: 2200000,
    stage: 'closing',
    status: 'lost',
    createdAt: new Date('2023-11-20'),
    updatedAt: new Date('2023-12-25')
  }
];
