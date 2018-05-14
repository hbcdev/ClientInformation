import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-claim-detail-table',
  templateUrl: './claim-detail-table.component.html',
  styleUrls: ['./claim-detail-table.component.css']
})
export class ClaimDetailTableComponent implements OnInit {

    @Input() tableData: any;
  claimDetailTable = [
    'notifyNo',
    'hospital',
    'accDate',
    'admitDate',
    'discharge',
    'icd10',
    'charge',
    'benefitPaid'];

  MapclaimDetail = new MatTableDataSource<claimDetailModel>(CLAIMDETAIL_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    console.log('table data : ', this.tableData);
    this.MapclaimDetail.paginator = this.paginator;
  }

}


export interface claimDetailModel {
  notifyNo: string;
  hospital: string;
  accDate: string;
  admitDate: string;
  discharge: string;
  icd10: string;
  charge: string;
  benefitPaid: string;
}

export const CLAIMDETAIL_DATA: claimDetailModel[] = [
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
  {
    notifyNo: 'xxxxxxxx',
    hospital: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    accDate: '01/0161 12:00',
    admitDate: '01/0161 12:00',
    discharge: '999,999',
    icd10: 'xx99',
    charge: '999,999',
    benefitPaid: '999,999',
  },
];
