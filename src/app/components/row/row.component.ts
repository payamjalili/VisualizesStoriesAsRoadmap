import { Component, Input } from '@angular/core';
import { IIssue } from 'src/app/types';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  @Input() label!: string;
  @Input() cards!: IIssue[];
  @Input() minDueDate!: Date;
  @Input() maxDueDate!: Date;
}
