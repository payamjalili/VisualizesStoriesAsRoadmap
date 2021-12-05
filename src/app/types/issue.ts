import { IIssueField } from '.';

export interface IIssue {
  fields: IIssueField;
  id: string;
  key: string;
}
