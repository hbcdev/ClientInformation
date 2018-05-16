import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-claim-his-by-nat-id',
  templateUrl: './claim-his-by-nat-id.component.html',
  styleUrls: ['./claim-his-by-nat-id.component.css']
})
export class ClaimHisByNatIDComponent implements OnInit {
    page_title = 'Claim History By NatID';
  @ViewChild(MatPaginator) paginator: MatPaginator;

    claimHisByNatData: any;
  claimHisDataTable = new MatTableDataSource<claimHisModel>(CLIAMHIS_DATA);
  claimHisTable = [
    'RecieveDate',
    'NotifyNo',
    'Type',
    'VisitNo',
    'PolicyNo',
    'Plan',
    'ClientName',
    'AccDate',
    'Hospital',
    'AdmitDate',
    'Discharge',
    'Diags1',
    'Diags2',
    'Diags3',
    'Charge',
    'Discount',
    'NonCover',
    'Benefit',
    'Exgratia',
    'DeducPaid',
    'ClientPaid',
    'Indicator',
    'Pending',
    'Assesor',
    'Nurse',
    'AuditBy',
    'ReturnDay',
    'Status',
    'PuNo',
    'ChqNo',
    'PaidDate',
    'PaidTo'
  ];
  constructor() {
    $('.loading').show();
   }

  ngOnInit() {
    this.claimHisDataTable.paginator = this.paginator;
    this.claimHisByNatData = CLAIMHISBYNATDETAIL_DATA[0];
    $('.loading').hide();
  }

}

export interface claimhisByNat {
  IndicstorOfAdmission: string;
  TreatmentPlan: string;
}
export const CLAIMHISBYNATDETAIL_DATA: claimhisByNat [] = [
  {
    IndicstorOfAdmission: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' +
      'Corporis quidem est numquam debitis voluptates illum error odio, autem facilis temp',
    TreatmentPlan: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quidem ' +
      'est numquam debitis voluptates illum error odio, autem facilis temp',
  }

];
export interface claimHisModel {
  RecieveDate: string;
  NotifyNo: string;
  Type: string;
  VisitNo: string;
  PolicyNo: string;
  Plan: string;
  ClientName: string;
  AccDate: string;
  Hospital: string;
  AdmitDate: string;
  Discharge: string;
  Diags1: string;
  Diags2: string;
  Diags3: string;
  Charge: string;
  Discount: string;
  NonCover: string;
  Benefit: string;
  Exgratia: string;
  DeducPaid: string;
  ClientPaid: string;
  Indicator: string;
  Pending: string;
  Assesor: string;
  Nurse: string;
  AuditBy: string;
  ReturnDay: string;
  Status: string;
  PuNo: string;
  ChqNo: string;
  PaidDate: string;
  PaidTo: string;
}

export const CLIAMHIS_DATA: claimHisModel[] = [
  {
    RecieveDate: '01/01/61 12:00',
    NotifyNo: '9999999999',
    Type: 'OPD',
    VisitNo: '99',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx99999',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxx xxxxxxxxxx',
    AccDate: '01/01/61 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    AdmitDate: '01/01/61 12:00',
    Discharge: '999,999',
    Diags1: '999',
    Diags2: '999',
    Diags3: '999',
    Charge: '999,999',
    Discount: '999,999',
    NonCover: '999,999',
    Benefit: '999,999',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxx xxxxxxxxx',
    ReturnDay: '99',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: '01/01/61 12:00',
    PaidTo: 'xxxxxxxxx xxxxxxxxx',
  },
  {
    RecieveDate: 'xxxxxxxxxxxxxxxxxx',
    NotifyNo: 'xxxxxxxxxxxxxxxxxx',
    Type: 'xxxxxxxxxxxxxxxxxx',
    VisitNo: 'xxxxxxxxxxxxxxxxxx',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxxxxxxxxxxx',
    AccDate: 'xxxxxxxxxxxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    AdmitDate: 'xxxxxxxxxxxxxxxxxx',
    Discharge: 'xxxxxxxxxxxxxxxxxx',
    Diags1: 'xxxxxxxxxxxxxxxxxx',
    Diags2: 'xxxxxxxxxxxxxxxxxx',
    Diags3: 'xxxxxxxxxxxxxxxxxx',
    Charge: 'xxxxxxxxxxxxxxxxxx',
    Discount: 'xxxxxxxxxxxxxxxxxx',
    NonCover: 'xxxxxxxxxxxxxxxxxx',
    Benefit: 'xxxxxxxxxxxxxxxxxx',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: 'xxxxxxxxxxxxxxxxxx',
    ClientPaid: 'xxxxxxxxxxxxxxxxxx',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxxxxxxxxxxx',
    ReturnDay: 'xxxxxxxxxxxxxxxxxx',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: 'xxxxxxxxxxxxxxxxxx',
    PaidTo: 'xxxxxxxxxxxxxxxxxx',
  },
  {
    RecieveDate: 'xxxxxxxxxxxxxxxxxx',
    NotifyNo: 'xxxxxxxxxxxxxxxxxx',
    Type: 'xxxxxxxxxxxxxxxxxx',
    VisitNo: 'xxxxxxxxxxxxxxxxxx',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxxxxxxxxxxx',
    AccDate: 'xxxxxxxxxxxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    AdmitDate: 'xxxxxxxxxxxxxxxxxx',
    Discharge: 'xxxxxxxxxxxxxxxxxx',
    Diags1: 'xxxxxxxxxxxxxxxxxx',
    Diags2: 'xxxxxxxxxxxxxxxxxx',
    Diags3: 'xxxxxxxxxxxxxxxxxx',
    Charge: 'xxxxxxxxxxxxxxxxxx',
    Discount: 'xxxxxxxxxxxxxxxxxx',
    NonCover: 'xxxxxxxxxxxxxxxxxx',
    Benefit: 'xxxxxxxxxxxxxxxxxx',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: 'xxxxxxxxxxxxxxxxxx',
    ClientPaid: 'xxxxxxxxxxxxxxxxxx',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxxxxxxxxxxx',
    ReturnDay: 'xxxxxxxxxxxxxxxxxx',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: 'xxxxxxxxxxxxxxxxxx',
    PaidTo: 'xxxxxxxxxxxxxxxxxx',
  },
  {
    RecieveDate: 'xxxxxxxxxxxxxxxxxx',
    NotifyNo: 'xxxxxxxxxxxxxxxxxx',
    Type: 'xxxxxxxxxxxxxxxxxx',
    VisitNo: 'xxxxxxxxxxxxxxxxxx',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxxxxxxxxxxx',
    AccDate: 'xxxxxxxxxxxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    AdmitDate: 'xxxxxxxxxxxxxxxxxx',
    Discharge: 'xxxxxxxxxxxxxxxxxx',
    Diags1: 'xxxxxxxxxxxxxxxxxx',
    Diags2: 'xxxxxxxxxxxxxxxxxx',
    Diags3: 'xxxxxxxxxxxxxxxxxx',
    Charge: 'xxxxxxxxxxxxxxxxxx',
    Discount: 'xxxxxxxxxxxxxxxxxx',
    NonCover: 'xxxxxxxxxxxxxxxxxx',
    Benefit: 'xxxxxxxxxxxxxxxxxx',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: 'xxxxxxxxxxxxxxxxxx',
    ClientPaid: 'xxxxxxxxxxxxxxxxxx',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxxxxxxxxxxx',
    ReturnDay: 'xxxxxxxxxxxxxxxxxx',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: 'xxxxxxxxxxxxxxxxxx',
    PaidTo: 'xxxxxxxxxxxxxxxxxx',
  },
  {
    RecieveDate: 'xxxxxxxxxxxxxxxxxx',
    NotifyNo: 'xxxxxxxxxxxxxxxxxx',
    Type: 'xxxxxxxxxxxxxxxxxx',
    VisitNo: 'xxxxxxxxxxxxxxxxxx',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxxxxxxxxxxx',
    AccDate: 'xxxxxxxxxxxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    AdmitDate: 'xxxxxxxxxxxxxxxxxx',
    Discharge: 'xxxxxxxxxxxxxxxxxx',
    Diags1: 'xxxxxxxxxxxxxxxxxx',
    Diags2: 'xxxxxxxxxxxxxxxxxx',
    Diags3: 'xxxxxxxxxxxxxxxxxx',
    Charge: 'xxxxxxxxxxxxxxxxxx',
    Discount: 'xxxxxxxxxxxxxxxxxx',
    NonCover: 'xxxxxxxxxxxxxxxxxx',
    Benefit: 'xxxxxxxxxxxxxxxxxx',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: 'xxxxxxxxxxxxxxxxxx',
    ClientPaid: 'xxxxxxxxxxxxxxxxxx',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxxxxxxxxxxx',
    ReturnDay: 'xxxxxxxxxxxxxxxxxx',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: 'xxxxxxxxxxxxxxxxxx',
    PaidTo: 'xxxxxxxxxxxxxxxxxx',
  },
  {
    RecieveDate: 'xxxxxxxxxxxxxxxxxx',
    NotifyNo: 'xxxxxxxxxxxxxxxxxx',
    Type: 'xxxxxxxxxxxxxxxxxx',
    VisitNo: 'xxxxxxxxxxxxxxxxxx',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxxxxxxxxxxx',
    AccDate: 'xxxxxxxxxxxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    AdmitDate: 'xxxxxxxxxxxxxxxxxx',
    Discharge: 'xxxxxxxxxxxxxxxxxx',
    Diags1: 'xxxxxxxxxxxxxxxxxx',
    Diags2: 'xxxxxxxxxxxxxxxxxx',
    Diags3: 'xxxxxxxxxxxxxxxxxx',
    Charge: 'xxxxxxxxxxxxxxxxxx',
    Discount: 'xxxxxxxxxxxxxxxxxx',
    NonCover: 'xxxxxxxxxxxxxxxxxx',
    Benefit: 'xxxxxxxxxxxxxxxxxx',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: 'xxxxxxxxxxxxxxxxxx',
    ClientPaid: 'xxxxxxxxxxxxxxxxxx',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxxxxxxxxxxx',
    ReturnDay: 'xxxxxxxxxxxxxxxxxx',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: 'xxxxxxxxxxxxxxxxxx',
    PaidTo: 'xxxxxxxxxxxxxxxxxx',
  },
  {
    RecieveDate: 'xxxxxxxxxxxxxxxxxx',
    NotifyNo: 'xxxxxxxxxxxxxxxxxx',
    Type: 'xxxxxxxxxxxxxxxxxx',
    VisitNo: 'xxxxxxxxxxxxxxxxxx',
    PolicyNo: 'xxxxxxxxxxxxxxxxxx',
    Plan: 'xxxxxxxxxxxxxxxxxx',
    ClientName: 'xxxxxxxxxxxxxxxxxx',
    AccDate: 'xxxxxxxxxxxxxxxxxx',
    Hospital: 'xxxxxxxxxxxxxxxxxx',
    AdmitDate: 'xxxxxxxxxxxxxxxxxx',
    Discharge: 'xxxxxxxxxxxxxxxxxx',
    Diags1: 'xxxxxxxxxxxxxxxxxx',
    Diags2: 'xxxxxxxxxxxxxxxxxx',
    Diags3: 'xxxxxxxxxxxxxxxxxx',
    Charge: 'xxxxxxxxxxxxxxxxxx',
    Discount: 'xxxxxxxxxxxxxxxxxx',
    NonCover: 'xxxxxxxxxxxxxxxxxx',
    Benefit: 'xxxxxxxxxxxxxxxxxx',
    Exgratia: 'xxxxxxxxxxxxxxxxxx',
    DeducPaid: 'xxxxxxxxxxxxxxxxxx',
    ClientPaid: 'xxxxxxxxxxxxxxxxxx',
    Indicator: 'xxxxxxxxxxxxxxxxxx',
    Pending: 'xxxxxxxxxxxxxxxxxx',
    Assesor: 'xxxxxxxxxxxxxxxxxx',
    Nurse: 'xxxxxxxxxxxxxxxxxx',
    AuditBy: 'xxxxxxxxxxxxxxxxxx',
    ReturnDay: 'xxxxxxxxxxxxxxxxxx',
    Status: 'xxxxxxxxxxxxxxxxxx',
    PuNo: 'xxxxxxxxxxxxxxxxxx',
    ChqNo: 'xxxxxxxxxxxxxxxxxx',
    PaidDate: 'xxxxxxxxxxxxxxxxxx',
    PaidTo: 'xxxxxxxxxxxxxxxxxx',
  },
];
