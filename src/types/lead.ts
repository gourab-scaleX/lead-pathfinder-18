export type LeadStage = 'initial_review' | 'stage_1' | 'stage_2' | 'closing';

export type LeadStatus = 
  | 'pending'           // Initial review - not yet qualified/rejected
  | 'qualified'         // Qualified to move forward
  | 'disqualified'      // Rejected/Disqualified
  | 'won'              // Deal won
  | 'lost';            // Deal lost

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  currentRevenue: number;
  stage: LeadStage;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

export const STAGE_LABELS: Record<LeadStage, string> = {
  initial_review: 'Initial Review',
  stage_1: 'Stage 1',
  stage_2: 'Stage 2',
  closing: 'Closing'
};

export const STATUS_LABELS: Record<LeadStatus, string> = {
  pending: 'Pending',
  qualified: 'Qualified',
  disqualified: 'Disqualified',
  won: 'Won',
  lost: 'Lost'
};
