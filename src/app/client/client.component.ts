import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    page_title = 'Client Information';
  displayData = ['PolicyNo', 'Plan', 'Effective', 'Expired', 'PolicyYear'];
  displaySource = new MatTableDataSource<Element>(ELEMENT_DATA);
  clientData: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    setTimeout(() => {
      $('.loading').hide();
      console.log('oninit :');
    }, 1500);
    this.displaySource.paginator = this.paginator;
    this.clientData = CLINT_DATA[0];
  }
  openDialog() {

  }
}
export interface Element {
  PolicyNo: string;
  Plan: string;
  Effective: string;
  Expired: string;
  PolicyYear: string;
}

const ELEMENT_DATA: Element[] = [
  { PolicyNo: '00-18-11-PA5-44425', Plan: 'PADebit1แสน', Effective: '01/01/61 12:00', Expired: '01/01/61 12:00', PolicyYear: '2' },
  { PolicyNo: '00-18-11-PA5-44425', Plan: 'PADebit1แสน', Effective: '01/01/61 12:00', Expired: '01/01/61 12:00', PolicyYear: '2' },
  { PolicyNo: '00-18-11-PA5-44425', Plan: 'PADebit1แสน', Effective: '01/01/61 12:00', Expired: '01/01/61 12:00', PolicyYear: '2' },
  { PolicyNo: '00-18-11-PA5-44425', Plan: 'PADebit1แสน', Effective: '01/01/61 12:00', Expired: '01/01/61 12:00', PolicyYear: '2' },
  { PolicyNo: '00-18-11-PA5-44425', Plan: 'PADebit1แสน', Effective: '01/01/61 12:00', Expired: '01/01/61 12:00', PolicyYear: '2' },
  { PolicyNo: '00-18-11-PA5-44425', Plan: 'PADebit1แสน', Effective: '01/01/61 12:00', Expired: '01/01/61 12:00', PolicyYear: '2' },
];


export interface clientModel {
  cradID: string;
  name: string;
  policyHolder: string;
  policyNo: string;
  familyPerson: number;
  plan: string;
  personalID: string;
  sex: string;
  waittingTo: string;
  planID: string;
  DOB: string;
  age: string;
  policyDate: string;
  graceTo: string;
  policyYear: number;
  duration: number;
  payFreq: string;
  status: string;
  riderDate: string;
  deductible: string;
  meCover: string;
  effective: string;
  exclusionWaitting: string;
  coPayment: string;
  mccover: string;
  expiry: string;
  chronicWaitting: string;
  hsCover: string;
  hbLimit: string;
  piadDate: string;
  reinstableDate: string;
  lastExpiry: string;
}

export const CLINT_DATA: clientModel[] = [{
  cradID: '1',
  name: '2',
  policyHolder: '3',
  policyNo: '4',
  familyPerson: 5,
  plan: '6',
  personalID: '7',
  sex: '8',
  waittingTo: '9',
  planID: '10',
  DOB: '11',
  age: '12',
  policyDate: '13',
  graceTo: '14',
  policyYear: 15,
  duration: 16,
  payFreq: '17',
  status: '18',
  riderDate: '19',
  deductible: '20',
  meCover: '21',
  effective: '22',
  exclusionWaitting: '23',
  coPayment: '24',
  mccover: '25',
  expiry: '26',
  chronicWaitting: '27',
  hsCover: '28',
  hbLimit: '29',
  piadDate: '30',
  reinstableDate: '31',
  lastExpiry: '32',
} ]