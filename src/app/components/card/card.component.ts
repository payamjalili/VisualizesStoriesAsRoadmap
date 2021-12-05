import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IIssue } from 'src/app/types';
import { CartInfoComponent } from '../cart-info/cart-info.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: IIssue;
  @Input() minDueDate!: Date;
  @Input() maxDueDate!: Date;

  differenceMinMax!: number;
  screenWidth!: number;
  labelsWidth: number = 150;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.updateWindowWidth();
    this.differenceMinMax =
      new Date(this.maxDueDate).getTime() - new Date(this.minDueDate).getTime();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.screenWidth = window.innerWidth - this.labelsWidth;
  }

  getCardWidth(card: IIssue) {
    return card.fields.timeoriginalestimate / this.screenWidth > 200
      ? card.fields.timeoriginalestimate / this.screenWidth
      : 200;
  }

  getCardStart(card: IIssue) {
    const differenceMinDue =
      new Date(card.fields.duedate).getTime() -
      new Date(this.minDueDate).getTime();

    const startPercentage = (differenceMinDue * 100) / this.differenceMinMax;

    return (startPercentage * this.screenWidth) / 100;
  }

  showCardDetail() {
    const modalRef = this.modalService.open(CartInfoComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.card = this.card;
  }
}
