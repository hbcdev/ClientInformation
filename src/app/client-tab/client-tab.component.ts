import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-client-tab',
  templateUrl: './client-tab.component.html',
  styleUrls: ['./client-tab.component.css']
})
export class ClientTabComponent implements OnInit {
  displayData = ['CardNo', 'IssueDate', 'ExpDate', 'PolicyNo', 'NationID', 'PolicyID'];
  displaySource = new MatTableDataSource<Element>(ELEMENT_DATA);

  paymentTable = ['Period' , 'DueDate' , 'PiadDate' , 'Premium' , 'Filename'  ];
  paymentTableData = new MatTableDataSource<payment>(PAYMENT_DATA);
  clientData = {};
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  CardNo: string;
  IssueDate: string;
  ExpDate: string;
  PolicyNo: string;
  NationID: string;
  PolicyID: string;
}

const ELEMENT_DATA: Element[] = [
  {
    CardNo: '12345647987', IssueDate: '01/01/61 12:00',
    ExpDate: '01/01/61 12:00', PolicyNo: '00-12854-45684-5255',
    NationID: '1122588745668/', PolicyID: '123' 
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
