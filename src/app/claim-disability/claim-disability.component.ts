import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-claim-disability',
  templateUrl: './claim-disability.component.html',
  styleUrls: ['./claim-disability.component.css']
})
export class ClaimDisabilityComponent implements OnInit {
  page_title = 'Claim Disability';
  cliamDisTable = [
    'NotifyNo',
    'AccDate',
    'AdmitDate',
    'Discharge',
    'ClaimType',
    'Diags',
    'Charge',
    'Benefit',
    'EndDate',
    'DeductiblePaidaid',
    'ClientPaid'];

  mapCliamdis = new MatTableDataSource<claimDisDatasource>(CLAIMDIS_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
    $('.loading').show();
  }

  ngOnInit() {
    this.mapCliamdis.paginator = this.paginator;
    // setTimeout(() => {
      $('.loading').hide();
      console.log('oninit :');
    // }, 1500);
  }

}

export interface claimDisDatasource {
  NotifyNo: string;
  AccDate: string;
  AdmitDate: string;
  Discharge: string;
  ClaimType: string;
  Diags: string;
  Charge: string;
  Benefit: string;
  EndDate: string;
  DeductiblePaidaid: string;
  ClientPaid: string;
}

export const CLAIMDIS_DATA: claimDisDatasource[] = [
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
  {
    NotifyNo: '132546789',
    AccDate: '01/01/61 12:00',
    AdmitDate: '01/01/61 12:00',
    Discharge: '99,999',
    ClaimType: 'ABC',
    Diags: '99',
    Charge: '99,999',
    Benefit: '99,999',
    EndDate: '01/01/61 12:00',
    DeductiblePaidaid: '999,999',
    ClientPaid: '999,999',
  },
];


