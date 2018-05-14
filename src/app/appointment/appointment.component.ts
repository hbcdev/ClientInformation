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


  appPointData: any;
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
    this.appPointData = APPOINTDATA_DATA[0];
  }

}

export interface appPointData {
  CustomerMobile: string;
  ClinicPhone: string;
  Receiveby: string;
  DateReceive: string;
  IndicationAdmit: string;
  TreatmentPlan: string;
  Notetoclinic: string;
  Note: string;
}

export const APPOINTDATA_DATA: appPointData[] = [
  {
    CustomerMobile: '099-9999999',
    ClinicPhone: '099-9999999',
    Receiveby: 'xxxxxxxx xxxxxxxxx',
    DateReceive: '01/01/61 12:00',
    IndicationAdmit: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    TreatmentPlan: 'xxxxxxxxxxxxxxxxxx',
    Notetoclinic: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  }
];

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