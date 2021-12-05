import { Component, OnInit } from '@angular/core';
import { JiraApiService } from 'src/app/services/jira-api.service';
import { IIssue, IResponse } from 'src/app/types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows: Record<string, IIssue[]> = {};
  minDueDate: Date = new Date();
  maxDueDate: Date = new Date();
  maxEstimate!: number;

  constructor(private jiraAPI: JiraApiService) {}

  ngOnInit() {
    this.jiraAPI.getIssues().subscribe((response: IResponse) => {
      const allLabels = response.issues.map(
        (issue: any) => issue.fields.labels
      );

      const uniqueLabels = [...new Set(allLabels.flat())];
      this.rows = uniqueLabels.reduce((a, v) => ({ ...a, [v]: [] }), {});
      response.issues.forEach((issue: any) => {
        uniqueLabels.forEach((label: string) => {
          if (issue.fields.labels.includes(label)) this.rows[label].push(issue);
        });
      });

      const allDueDates = response.issues.map(
        (issue: any) => issue.fields.duedate
      );
      this.minDueDate = allDueDates.reduce((a: Date, b: Date) =>
        a < b ? a : b
      );
      this.maxDueDate = allDueDates.reduce((a: Date, b: Date) =>
        a > b ? a : b
      );
    });
  }
}
