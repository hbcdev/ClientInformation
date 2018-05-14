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

  tabDataSow: any;

  paymentTable = ['Period', 'DueDate', 'PiadDate', 'Premium', 'Filename'];
  paymentTableData = new MatTableDataSource<payment>(PAYMENT_DATA);

  constructor() { }

  ngOnInit() {
    this.tabDataSow =  TAB_DATA[0];
    console.log('GG : ' + this.tabDataSow.tab1.Eclusion);
  }

}

export interface tabData {
  tab1: string;
  tab2: {
    data: string;
  };
  tab3: {
    Permium: string;
    Waitting1: string;
    Mobile: string;
    Payee: string;
    ClientNo: string;
    Group: string;
    Address: string;
    Waitting2: string;
    Note: string;
    OldPolicy: string;
    PolicyID: string;
  };
  tab4: {
    OldCardNo: string;
    AdjustDate: string;
  };
  tab6: {
    Prefer: string;
    Agent: string;
    Agency: string;
    AgentCode: string;
    Address: string;
    AgencyCode: string;
  };
  tab7: {
    Quotation: string;
    OldGracePeriod: string;
    NewRecieve: string;
    CancleRecieve: string;
    LastUpdateUser: string;
    DueDate: string;
    NewUpload: string;
    CancleUpload: string;
    LastUpdateDate: string;
  };
  tab8: {
    call: string;
    date: string;
  };
}


export const TAB_DATA: tabData[] = [
  {
    tab1: {
      Eclusion: 'string',
      InfoNote: 'string',
      Notation: 'string'
    },
    tab2: {
      data: 'string',
    },
    tab3: {
      Permium: 'string',
      Waitting1: 'string',
      Mobile: 'string',
      Payee: 'string',
      ClientNo: 'string',
      Group: 'string',
      Address: 'string',
      Waitting2: 'string',
      Note: 'string',
      OldPolicy: 'string',
      PolicyID: 'string',
    },
    tab4: {
      OldCardNo: 'string',
      AdjustDate: 'string',
    },
    tab6: {
      Prefer: 'string',
      Agent: 'string',
      Agency: 'string',
      AgentCode: 'string',
      Address: 'string',
      AgencyCode: 'string',
    },
    tab7: {
      Quotation: 'string',
      OldGracePeriod: 'string',
      NewRecieve: 'string',
      CancleRecieve: 'string',
      LastUpdateUser: 'string',
      DueDate: 'string',
      NewUpload: 'string',
      CancleUpload: 'string',
      LastUpdateDate: 'string',
    },
    tab8: {
      call: 'string',
      date: 'string',
    },
  }
],

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
