import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';


@Component({
  selector: 'app-cscall-log',
  templateUrl: './cscall-log.component.html',
  styleUrls: ['./cscall-log.component.css']
})
export class CSCallLogComponent implements OnInit {

  page_title = 'CS Call Log';
  callLog: any;
  @ViewChild(MatPaginator) pagoantor: MatPaginator;

  callLogTable = [
    'NotifyNo',
    'TransDate',
    'AccDate',
    'Hospital',
    'Charge',
    'Paid'
  ];


  callLogDataTable = new MatTableDataSource<callLogModel>(CALLLOG_DATA);
  constructor() { }

  ngOnInit() {
    $('.loading').hide();
    this.callLogDataTable.paginator = this.pagoantor;
    this.callLog = CALLLOGDETAIL_DATA[0];
  }

}

export interface callLogDetail {
  Reason: string;
  Note: string;
  CallFile: string;
}

export interface callLogModel {
  NotifyNo: string;
  TransDate: string;
  AccDate: string;
  Hospital: string;
  Charge: string;
  Paid: string;
}

export const CALLLOG_DATA: callLogModel[] = [
  {
    NotifyNo: '9999999999',
    TransDate: '01/01/61 12:00',
    AccDate: '01/01/61 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    Charge: '999,999',
    Paid: '999,999',
  }
];

export const CALLLOGDETAIL_DATA: callLogDetail[] = [
  {
    Reason: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    CallFile: 'xxxxxxxx',
  }
];