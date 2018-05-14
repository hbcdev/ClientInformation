import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-web-claim-pay',
  templateUrl: './web-claim-pay.component.html',
  styleUrls: ['./web-claim-pay.component.css']
})
export class WebClaimPayComponent implements OnInit {
  page_title = 'Web Claim Payment';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  claimPayTable = [
    'NotifyNo',
    'TransDate',
    'AccDate',
    'Hospital',
    'Charge',
    'Paid'
  ];

  claimPayDataTable = new MatTableDataSource<claimPayModel>(CLAIMPAY_DATA);

  constructor() { }

  ngOnInit() {
    $('.loading').hide();
    this.claimPayDataTable.paginator = this.paginator;
  }

}
export interface claimPayModel {
  NotifyNo: string;
  TransDate: string;
  AccDate: string;
  Hospital: string;
  Charge: string;
  Paid: string;
}

export const CLAIMPAY_DATA: claimPayModel[] = [
  {
    NotifyNo: '9999999999999',
    TransDate: '01/01/61 12:00',
    AccDate: '01/01/61 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxxxx',
    Charge: '999,999',
    Paid: '999,999',
  },
];

