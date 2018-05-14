import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchData: any;
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createFormSearch();
  }
  createFormSearch() {
    this.searchForm = this.fb.group({
      stpa: new FormControl,
      search_by: new FormControl,
      policy_no: new FormControl
    });
  }

  ngOnInit() {
    console.log('Test : ', SEAECH_DATA);
    this.searchData = SEAECH_DATA[0];
  }

  search() {
    console.log('submit : ', this.searchForm.value);
    if (this.searchForm.value.search_by == 1) {
      SEAECH_DATA[0].policyNo = this.searchForm.value.policy_no;
      SEAECH_DATA[0].searchBy = 'Policy No';
      console.log('search_by : Policy No. ');
    } else if (this.searchForm.value.search_by == 2) {
      SEAECH_DATA[0].name = this.searchForm.value.policy_no;
      SEAECH_DATA[0].searchBy = 'Name';
      console.log('search_by : Name ');
    } else if (this.searchForm.value.search_by == 3) {
      SEAECH_DATA[0].name = this.searchForm.value.policy_no;
      SEAECH_DATA[0].searchBy = 'Surname';
      console.log('search_by : Surname ');
    } else if (this.searchForm.value.search_by == 4) {
      SEAECH_DATA[0].name = this.searchForm.value.policy_no;
      SEAECH_DATA[0].searchBy = 'NationID';
      console.log('search_by : NationID ');
    } else if (this.searchForm.value.search_by == 5) {
      SEAECH_DATA[0].name = this.searchForm.value.policy_no;
      SEAECH_DATA[0].searchBy = 'Card No';
      console.log('search_by : Card No ');
    } else if (this.searchForm.value.search_by == 6) {
      SEAECH_DATA[0].name = this.searchForm.value.policy_no;
      SEAECH_DATA[0].searchBy = 'Referance No';
      console.log('search_by : Referance No ');
    }

    $('#bfSearch').hide();
    $('#afSearch').slideDown(700);
  }
  newSearch() {
    $('#afSearch').hide();
    $('#bfSearch').slideDown(700);
  }

}

export interface SearchModel {
  tpa: string;
  name: string;
  policyNo: string;
  searchBy: string;
  plan: string;
  planID: string;
}

export const SEAECH_DATA: SearchModel[] = [
  {
    tpa: 'Devas Insurance Company Limited',
    name: 'Xxxxxxx xxxxxxx ',
    policyNo: '00/2017-R001818-HNR ',
    searchBy: 'Policy No',
    plan: 'แผน Platinum 1 ปี ',
    planID: 'DVS001'
  }
];
