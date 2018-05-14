import { Component, OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-claim-his-table2',
  templateUrl: './claim-his-table2.component.html',
  styleUrls: ['./claim-his-table2.component.css']
})
export class ClaimHisTable2Component implements OnInit {


  @ViewChild(MatPaginator) paginator2: MatPaginator;
  claimHis2Data: any;
  claimHisDataTable2 = new MatTableDataSource<claimHisModel2>(CLIAMHIS_DATA2);
  claimHisTable2 = [
    'Description',
    'Day',
    'Per',
    'Charge',
    'Discount',
    'NoCover',
    'Exgratia',
    'BenefitPaid',
    'DeducPaid',
    'ClientPaid',
    'Note'
  ];
  constructor() { }

  ngOnInit() {
    this.claimHisDataTable2.paginator = this.paginator2;
    this.claimHis2Data = CLAIMHIS2[0];
  }

}
export interface claimHis2 {
  ExternalNote: string;
  FaxNoteIntenval: string;
  NoteToInsuraceExternal: string;
  AuditNoteIntenval: string;
}
export const CLAIMHIS2: claimHis2[] = [
  {
  ExternalNote: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  FaxNoteIntenval: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  NoteToInsuraceExternal: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  AuditNoteIntenval: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
  }
];


export interface claimHisModel2 {
  Description: string;
  Day: string;
  Per: string;
  Charge: string;
  Discount: string;
  NoCover: string;
  Exgratia: string;
  BenefitPaid: string;
  DeducPaid: string;
  ClientPaid: string;
  Note: string;
}
export const CLIAMHIS_DATA2: claimHisModel2[] = [
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    Description: 'xxxxxxxxxxxxxxxxx',
    Day: '99',
    Per: 'XX',
    Charge: '999,999',
    Discount: '999,999',
    NoCover: 'xxxxxxxxx',
    Exgratia: 'xxxxxxxx',
    BenefitPaid: '999,999',
    DeducPaid: '999,999',
    ClientPaid: '999,999',
    Note: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
];