import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {TooltipsModule} from 'ionic-tooltips';
//import {PlansPageModule} from '../pages/plans/plans.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {File}from '@ionic-native/file';

import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';

 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { BuyersPage } from '../pages/buyers/buyers'
import { AddhtypePage } from '../pages/addhtype/addhtype';
import { UserhomepagePage } from '../pages/userhomepage/userhomepage';
import { AdmindashboardPage } from '../pages/admindashboard/admindashboard';
import { PlansPage } from '../pages/plans/plans';
import { PlansPageModule } from '../pages/plans/plans.module';
import { AddplanPage } from '../pages/addplan/addplan';
import { EditplanPage } from '../pages/editplan/editplan';
import { DisplanPage } from '../pages/displan/displan';
import { AddplanPageModule } from '../pages/addplan/addplan.module';
import { EditplanPageModule } from '../pages/editplan/editplan.module';
import { DisplanPageModule } from '../pages/displan/displan.module';
import { PlantabPage } from '../pages/plantab/plantab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AddpackPage } from '../pages/addpack/addpack';
import { Camera } from '@ionic-native/camera';
import { ShareserviceProvider } from '../providers/shareservice/shareservice';
import { PckgesPage } from '../pages/pckges/pckges';
import { NewpckPage } from '../pages/newpck/newpck';
import { ApovpckPage } from '../pages/apovpck/apovpck';
import { ActivePage } from '../pages/active/active';
import { NewpckPageModule } from '../pages/newpck/newpck.module';
import { ApovpckPageModule } from '../pages/apovpck/apovpck.module';
import { ActivePageModule } from '../pages/active/active.module';
import { ForgetpassPage } from '../pages/forgetpass/forgetpass';
import { Forgetpass2Page } from '../pages/forgetpass2/forgetpass2';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {AdminprovidePage} from '../pages/adminprovide/adminprovide';


import {HideheaderDirective} from '../directives/hideheader/hideheader';
import  {ImagePicker} from '@ionic-native/image-picker'
import { ClientrequestPage } from '../pages/clientrequest/clientrequest';
import { ClientapprovereqPage } from '../pages/clientapprovereq/clientapprovereq';
import { ClientpendreqPage } from '../pages/clientpendreq/clientpendreq';
import { ClientrejreqPage } from '../pages/clientrejreq/clientrejreq';
import { ClientapprovereqPageModule } from '../pages/clientapprovereq/clientapprovereq.module';
import { ClientpendreqPageModule } from '../pages/clientpendreq/clientpendreq.module';
import { ClientrejreqPageModule } from '../pages/clientrejreq/clientrejreq.module';
import { ProviderrequestPage } from '../pages/providerrequest/providerrequest';
import { ProviderapprovereqPage } from '../pages/providerapprovereq/providerapprovereq';
import { ProviderrequestPageModule } from '../pages/providerrequest/providerrequest.module';
import { ProviderapprovereqPageModule } from '../pages/providerapprovereq/providerapprovereq.module';
import { ProvidernewreqPage } from '../pages/providernewreq/providernewreq';
import { ProvidernewreqPageModule } from '../pages/providernewreq/providernewreq.module';
import { ProvidereqimgonlyPage } from '../pages/providereqimgonly/providereqimgonly';
import { ProvidereqimgonlyPageModule } from '../pages/providereqimgonly/providereqimgonly.module';
import { ProvidereqdataPage } from '../pages/providereqdata/providereqdata';
import { ProfilePage } from '../pages/profile/profile';
import { ProeditpckPage } from '../pages/proeditpck/proeditpck';
import { ProeditpckPageModule } from '../pages/proeditpck/proeditpck.module';
import { PropckagestabPage } from '../pages/propckagestab/propckagestab';
import { PromanagepcktabPage } from '../pages/promanagepcktab/promanagepcktab';
import { PropckapprovePageModule } from '../pages/propckapprove/propckapprove.module';
import { PropckstatePage } from '../pages/propckstate/propckstate';
import { PropckrejPage } from '../pages/propckrej/propckrej';
import { PropckrejPageModule } from '../pages/propckrej/propckrej.module';
import { PropckstatePageModule } from '../pages/propckstate/propckstate.module';
import { PropckapprovePage } from '../pages/propckapprove/propckapprove';
import { AddpackPageModule } from '../pages/addpack/addpack.module';
import { PackstatedataPage } from '../pages/packstatedata/packstatedata';
import { PackstatedataPageModule } from '../pages/packstatedata/packstatedata.module';
import { AdminpackstatedataPage } from '../pages/adminpackstatedata/adminpackstatedata';
import { AdminpackstatedataPageModule } from '../pages/adminpackstatedata/adminpackstatedata.module';
import { ClientlistPage } from '../pages/clientlist/clientlist';
import { ClientlistPageModule } from '../pages/clientlist/clientlist.module';
import { OffersPage } from '../pages/offers/offers';
import { AoffersPage } from '../pages/aoffers/aoffers';
import { OffersPageModule } from '../pages/offers/offers.module';
import { AoffersPageModule } from '../pages/aoffers/aoffers.module';
import { ViewPage } from '../pages/view/view';
import { HistoryPage } from '../pages/history/history';
import { ViewPageModule } from '../pages/view/view.module';
import { HistoryPageModule } from '../pages/history/history.module';
import { ReportsPage } from '../pages/reports/reports';
import { MembershipPage } from '../pages/membership/membership';
import { ReportsPageModule } from '../pages/reports/reports.module';
import { MembershipPageModule } from '../pages/membership/membership.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuyersPage,
    LoginPage,
    AddhtypePage,
    PlansPage,
    Forgetpass2Page,
  ForgetpassPage,
    PlantabPage,
    PckgesPage,
    UserhomepagePage,
    AdmindashboardPage,
    HideheaderDirective,
    AdminprovidePage,
    ClientrequestPage,
    ProviderrequestPage,
    ProvidereqimgonlyPage,
    ProvidereqdataPage,
    ProfilePage,
    PropckagestabPage,
    PromanagepcktabPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,HttpModule,
    TooltipsModule,
    PlansPageModule,
    AddplanPageModule,  
    ApovpckPageModule,
    NewpckPageModule,
    ActivePageModule,
    ClientapprovereqPageModule,
    ClientpendreqPageModule,
    ClientrejreqPageModule,
    EditplanPageModule,
    IonicImageViewerModule,
    DisplanPageModule,
    ProvidernewreqPageModule,
    ProviderapprovereqPageModule,
    ProeditpckPageModule,
    PropckapprovePageModule,
    PropckstatePageModule,
    PropckrejPageModule, 
    PackstatedataPageModule,
    AddpackPageModule,
    PackstatedataPageModule,
    AdminpackstatedataPageModule,
    ClientlistPageModule,
    OffersPageModule,
    AoffersPageModule,
    ViewPageModule,
    HistoryPageModule,
    ReportsPageModule,
    MembershipPageModule,
     
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuyersPage,
    HomePage,
    LoginPage,
    AddhtypePage,
    PlansPage,
    PlantabPage,
    AddplanPage,
    EditplanPage,
    DisplanPage,
    UserhomepagePage,
    AdminprovidePage,
    Forgetpass2Page,
    ForgetpassPage,
    AdmindashboardPage,
    PckgesPage,
      NewpckPage,
      ApovpckPage,
      ActivePage,
    AddpackPage,
    ClientrequestPage,
    ClientapprovereqPage,
    ClientpendreqPage,
    ClientrejreqPage,
    ProviderrequestPage,
   ProvidernewreqPage,
    ProviderapprovereqPage,
    ProvidereqimgonlyPage,
    ProvidereqdataPage,
    ProfilePage,
    PromanagepcktabPage,
    ProeditpckPage,
PropckagestabPage,
    PropckapprovePage,
    PropckstatePage,
    PropckrejPage, 
    PackstatedataPage,
    AdminpackstatedataPage,
    ClientlistPage,
  OffersPage,
  AoffersPage,
  ViewPage,
  HistoryPage,
   ReportsPage,
   MembershipPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,File,FileTransfer,IonicImageViewerModule,
    HttpClientModule,HttpModule,InAppBrowser,Camera,ShareserviceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShareserviceProvider,HideheaderDirective,
  ]
})
export class AppModule {}
