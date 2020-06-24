import { Component,ViewChild } from '@angular/core';
import { Platform,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Events} from 'ionic-angular'
import { HomePage } from '../pages/home/home';
import { UserhomepagePage } from '../pages/userhomepage/userhomepage';
import { AdmindashboardPage } from '../pages/admindashboard/admindashboard';
import { AddhtypePage } from '../pages/addhtype/addhtype';
import { PlantabPage } from '../pages/plantab/plantab';
import { AddpackPage } from '../pages/addpack/addpack';
import { PckgesPage } from '../pages/pckges/pckges';
import { ClientrequestPage } from '../pages/clientrequest/clientrequest';
import { ProviderrequestPage } from '../pages/providerrequest/providerrequest';
import { PropckagestabPage } from '../pages/propckagestab/propckagestab';
import { PromanagepcktabPage } from '../pages/promanagepcktab/promanagepcktab';
import { ProfilePage } from '../pages/profile/profile';
import { ClientlistPage } from '../pages/clientlist/clientlist';
import { OffersPage } from '../pages/offers/offers';
import { AoffersPage } from '../pages/aoffers/aoffers';
import { ViewPage } from '../pages/view/view';
import { HistoryPage } from '../pages/history/history';
import { ReportsPage } from '../pages/reports/reports';
import { MembershipPage } from '../pages/membership/membership';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any =HomePage;
  pages: Array<{class:any,title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public event:Events,public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    event.subscribe('user:pros',(ids)=>{
      console.log("hfjfhdjfh"+ids);
    this.pages = [
      {class:'fa fa-dashboard', title: 'Home', component:UserhomepagePage},
      {class:'fa fa-user',title:'Profile',component:ProfilePage},
      {class:'fa fa-cube',title:'Add Package',component:AddpackPage},
      {class:'fa fa-cubes',title:'Manage Packages',component:PromanagepcktabPage},
      {class:'fa fa-external-link-square',title:'Request',component:ProviderrequestPage},
      {class:'fa fa-history',title:'History',component:HistoryPage},
      {class:'fa fa-dropbox', title:'Plans', component: ViewPage },
      {class:'fa fa-gift',title:'Offers',component:OffersPage},
      {class:'fa fa-power-off',title:'Logout',component:HomePage},
      
      
      
    ];
  });

  event.subscribe('user:cust',(ids)=>{
    console.log("hfjfhdjfh"+ids);
  this.pages = [
    {class:'fa fa-dashboard', title: 'Home', component:UserhomepagePage},
    {class:'fa fa-user',title:'Profile',component:ProfilePage},
    {class:'fa fa-heart',title:'whishlist',component:ClientlistPage},
    {class:'fa fa-external-link-square',title:'Request',component:ClientrequestPage},
    {class:'fa fa-history',title:'History',component:HistoryPage},
    {class:'fa fa-dropbox', title:'Plans', component: ViewPage },
    {class:'fa fa-gift',title:'Offers',component:OffersPage},
    {class:'fa fa-power-off',title:'Logout',component:HomePage},
    
    
    
  ];
});
  event.subscribe('user:admins',()=>{
    this.pages = [
      {class:'fa fa-home', title: 'Home', component: AdmindashboardPage },
      {class:'fa fa-user', title:'Profile', component: ProfilePage },
      {class:'fa fa-plus-square', title:'Make hoarding type', component: AddhtypePage },
      {class:'fa fa-cube', title:'Packages', component: PckgesPage },
      {class:'fa fa-sitemap', title:'Memberships', component: MembershipPage },
      {class:'fa fa-gift', title:'Offers', component:AoffersPage },
      {class:'fa fa-dropbox', title:'Plans', component: PlantabPage },
      {class:'fa fa-area-chart', title:'Reports', component: ReportsPage },
      {class:'fa fa-power-off',title:'Logout',component:HomePage},
      
       
         ];
  });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

