import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IIssue } from 'src/app/types';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss'],
})
export class CartInfoComponent implements OnInit {
  @Input() card!: IIssue;
  estimateFormat!: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
