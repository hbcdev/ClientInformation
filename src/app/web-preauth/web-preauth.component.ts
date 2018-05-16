import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-web-preauth',
  templateUrl: './web-preauth.component.html',
  styleUrls: ['./web-preauth.component.css']
})
export class WebPreauthComponent implements OnInit {
  page_title = 'Web Preauth';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  preAuthTable = [
    'PreauthNo',
    'SwipeDate',
    'CardNo',
    'Hospital',
    'Approved',
    'Result'
  ];
  preAuthDataTable = new MatTableDataSource<preAuthModel>(PREAUTH_DATA);

  constructor() {
    $('.loading').show();
   }

  ngOnInit() {
    $('.loading').hide();
    this.preAuthDataTable.paginator = this.paginator;
  }

}


export interface preAuthModel {
  PreauthNo: string;
  SwipeDate: string;
  CardNo: string;
  Hospital: string;
  Approved: string;
  Result: string;
}

export const PREAUTH_DATA: preAuthModel[] = [
  {
    PreauthNo: '123465789',
    SwipeDate: '01/01/61 12:00',
    CardNo: '9999999999999',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Approved: '999,999',
    Result: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    PreauthNo: '123465789',
    SwipeDate: '01/01/61 12:00',
    CardNo: '9999999999999',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Approved: '999,999',
    Result: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    PreauthNo: '123465789',
    SwipeDate: '01/01/61 12:00',
    CardNo: '9999999999999',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Approved: '999,999',
    Result: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    PreauthNo: '123465789',
    SwipeDate: '01/01/61 12:00',
    CardNo: '9999999999999',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Approved: '999,999',
    Result: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
];
