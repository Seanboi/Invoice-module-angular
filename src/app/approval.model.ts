export enum ApprovalStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}

export interface Approval {
  id: number;
  approval: ApprovalStatus;
  objectType: string;
  objectId: number;
  requestedAt: string;
  tempJson: string;
}
