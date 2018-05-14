import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule,
  MatDialogModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { ClientComponent } from './client/client.component';
import { ClientTabComponent } from './client-tab/client-tab.component';
import { ClaimDisabilityComponent } from './claim-disability/claim-disability.component';
import { AppRoutingModule } from './/app-routing.module';
import * as $ from 'jquery';
import { SummaryBenefitTableComponent } from './claim-disability/summary-benefit-table/summary-benefit-table.component';
import { ClaimDetailTableComponent } from './claim-disability/claim-detail-table/claim-detail-table.component';
import { PreCertificationComponent } from './pre-certification/pre-certification.component';
import { ClaimHisComponent } from './claim-his/claim-his.component';
import { ClaimHisTable2Component } from './claim-his-table2/claim-his-table2.component';
import { ClaimHisByNatIDComponent } from './claim-his-by-nat-id/claim-his-by-nat-id.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { WebPreauthComponent } from './web-preauth/web-preauth.component';
import { WebClaimPayComponent } from './web-claim-pay/web-claim-pay.component';
import { CSCallLogComponent } from './cscall-log/cscall-log.component';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    SearchComponent,
    ClientComponent,
    ClientTabComponent,
    ClaimDisabilityComponent,
    SummaryBenefitTableComponent,
    ClaimDetailTableComponent,
    PreCertificationComponent,
    ClaimHisComponent,
    ClaimHisTable2Component,
    ClaimHisByNatIDComponent,
    AppointmentComponent,
    WebPreauthComponent,
    WebClaimPayComponent,
    CSCallLogComponent,
    ClientDialogComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [],
  // entryComponents: [DialogDataExample, DialogDataExampleDialog],
  // declarations: [DialogDataExample, DialogDataExampleDialog],
  bootstrap: [MyNavComponent]
})
export class AppModule { }
