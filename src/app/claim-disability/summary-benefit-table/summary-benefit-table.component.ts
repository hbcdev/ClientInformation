import { Component, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-summary-benefit-table',
  templateUrl: './summary-benefit-table.component.html',
  styleUrls: ['./summary-benefit-table.component.css']
})
export class SummaryBenefitTableComponent implements OnInit {

  @Input() tableData: any;
  summaryTable = [
    'Description',
    'Group',
    'BenefitCover',
    'BenefitPaid',
    'BenefitRemain',
    'DayCover',
    'Day',
    'DayRemain',
    'Per',
    'NotifyNo'];

  Mapsummary = new MatTableDataSource<summaryModel>(SUMMARY_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    console.log('table data : ', this.tableData);
    this.Mapsummary.paginator = this.paginator;
   }

}


export interface summaryModel {
  Description: string;
  Group: string;
  BenefitCover: string;
  BenefitPaid: string;
  BenefitRemain: string;
  DayCover: string;
  Day: string;
  DayRemain: string;
  Per: string;
  NotifyNo: string;
}
export const SUMMARY_DATA: summaryModel[] = [
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
  { Description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    Group: 'xxx',
    BenefitCover: '999,999',
    BenefitPaid: '999,999',
    BenefitRemain: '999,999',
    DayCover: '99',
    Day: '99',
    DayRemain: '99.99',
    Per: 'X',
    NotifyNo: 'xxxxxxxxxxxxxx',
  },
];
