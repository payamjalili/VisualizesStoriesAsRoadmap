import { IIssueType } from './issue-type';

export interface IIssueField {
  duedate: Date;
  timeoriginalestimate: number;
  labels: string[];
  summary: string;
  description: string;
  issuetype: IIssueType;
}
