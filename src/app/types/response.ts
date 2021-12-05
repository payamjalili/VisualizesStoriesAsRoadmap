import { IIssue } from './';

export interface IResponse {
  expand: string;
  issues: IIssue[];
  maxResults: number;
  names: object;
  startAt: number;
  total: number;
}
