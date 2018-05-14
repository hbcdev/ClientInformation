import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  page_title = 'Appointment';
  appPointTable = [
    'DueDate',
    'Hospital',
    'TreantmentCode',
    'RecieveCallDate'
  ];
  appPointDatatable = new MatTableDataSource<appPointModel>(APPPOINT_DATA);
  constructor() { }

  ngOnInit() {
    $('.loading').hide();
    this.appPointDatatable.paginator = this.paginator;
  }

}


export interface appPointModel {
  DueDate: string;
  Hospital: string;
  TreantmentCode: string;
  RecieveCallDate: string;
}

export const APPPOINT_DATA: appPointModel[] = [
  {
    DueDate: '01/0161 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    TreantmentCode: 'xxxxxxxxxx',
    RecieveCallDate: '01/01/61 12:00',
  },
  {
    DueDate: '01/0161 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    TreantmentCode: 'xxxxxxxxxx',
    RecieveCallDate: '01/01/61 12:00',
  },
  {
    DueDate: '01/0161 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    TreantmentCode: 'xxxxxxxxxx',
    RecieveCallDate: '01/01/61 12:00',
  },
  {
    DueDate: '01/0161 12:00',
    Hospital: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    TreantmentCode: 'xxxxxxxxxx',
    RecieveCallDate: '01/01/61 12:00',
  },
];