import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-pre-certification',
  templateUrl: './pre-certification.component.html',
  styleUrls: ['./pre-certification.component.css']
})
export class PreCertificationComponent implements OnInit {
  page_title = 'Pre-Certification';
  preCerDAta: any;
  preCerTable = [
    'NotifyNo',
    'NotifyDate',
    'PolicyNo',
    'Plan',
    'Hospital',
    'AdmitDate'];
  preCerDataTable = new MatTableDataSource<perCerModel>(PERCER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
    $('.loading').show();
  }

  ngOnInit() {
    this.preCerDataTable.paginator = this.paginator;
    this.preCerDAta = PRECERSHOW_DATA[0];
    $('.loading').hide();
  }

}

export interface preCerShow {
  PrecertBy: string;
  NotifyDate: string;
  AuditBy: string;
  DateOfBirth: string;
  CancelBy: string;
  CancelDate: string;
  Status: string;
  IndicstorOfAdmission: string;
  TreamentPlan: string;
  Note: string;
  NoteToInsurance: string;
  ConcurrentReview: string;
  ExgratiaNore: string;
  Comment: string;
  CancelNote: string;
}

export const PRECERSHOW_DATA: preCerShow[] = [{
  PrecertBy: 'xxxxxxxxxx',
  NotifyDate: '01/0161 12:00',
  AuditBy: 'xxxxxxxxxx',
  DateOfBirth: '01/01/61 12:00',
  CancelBy: 'xxxxxxxxxx',
  CancelDate: '01/0161 12:00',
  Status: 'Waittting for hospital invoice',
  IndicstorOfAdmission: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  TreamentPlan: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  Note: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  NoteToInsurance: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  ConcurrentReview: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  ExgratiaNore: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  Comment: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
  CancelNote: 'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo',
}];

export interface perCerModel {
  NotifyNo: string;
  NotifyDate: string;
  PolicyNo: string;
  Plan: string;
  Hospital: string;
  AdmitDate: string;
}
export const PERCER_DATA: perCerModel[] = [
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
  {
    NotifyNo: '999999999',
    NotifyDate: '01/01/61 12:00',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/0161 12:00'
  },
];
