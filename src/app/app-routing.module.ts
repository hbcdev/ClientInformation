import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClaimDisabilityComponent } from './claim-disability/claim-disability.component';
import { PreCertificationComponent } from './pre-certification/pre-certification.component';
import { ClaimHisComponent } from './claim-his/claim-his.component';
import { ClaimHisByNatIDComponent } from './claim-his-by-nat-id/claim-his-by-nat-id.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { WebPreauthComponent } from './web-preauth/web-preauth.component';
import { WebClaimPayComponent } from './web-claim-pay/web-claim-pay.component';
import { CSCallLogComponent } from './cscall-log/cscall-log.component';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'ClaimDisability', component: ClaimDisabilityComponent },
  { path: 'PreCer', component: PreCertificationComponent },
  { path: 'ClaimHis', component: ClaimHisComponent },
  { path: 'ClaimHisByNat', component: ClaimHisByNatIDComponent },
  { path: 'appPoint', component: AppointmentComponent },
  { path: 'Webpreauth', component: WebPreauthComponent },
  { path: 'ClaimPay', component: WebClaimPayComponent },
  { path: 'CallLog', component: CSCallLogComponent },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
