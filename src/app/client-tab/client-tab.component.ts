import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-client-tab',
  templateUrl: './client-tab.component.html',
  styleUrls: ['./client-tab.component.css']
})
export class ClientTabComponent implements OnInit {
  displayData = ['PolicyNo', 'Plan', 'Effective', 'Expired', 'PolicyYear'];
  displaySource = new MatTableDataSource<Element>(ELEMENT_DATA);

  paymentTable = ['Period' , 'DueDate' , 'PiadDate' , 'Premium' , 'Filename'  ];
  paymentTableData = new MatTableDataSource<payment>(PAYMENT_DATA);
  clientData = {};
  constructor() { }

  ngOnInit() {
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
  {
    PolicyNo: 'xxxxxxxxx',
    Plan: 'xxxxxxxxx',
    Effective: 'xxxxxxxxx',
    Expired: '01/01/61 12:00',
    PolicyYear: '99',
  }

];
export interface payment {
  Period: string;
  DueDate: string;
  PiadDate: string;
  Premium: string;
  Filename: string;
}

const PAYMENT_DATA: payment[] = [
  {
    Period: '99999999',
    DueDate: '01/01/61 12:00',
    PiadDate: '01/01/61 12:00',
    Premium: 'Premium 1',
    Filename: 'file.txt',
  }

];
