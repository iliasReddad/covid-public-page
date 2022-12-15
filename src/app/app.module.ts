import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TablesComponent } from './views/admin/tables/tables.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { AdminComponent } from './layouts/auth/admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardSettingsComponent } from './components/cards/card-settings(create account )/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardTableComponent } from './components/cards/card-table(USER TABLE)/card-table.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { MapExampleComponent } from './components/maps/map-example/map-example.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import { StatsComponent } from './stats/stats.component';
import { ChartComponent } from './Charts/EvolutionchartTopic/chart.component'
import { NgChartsModule } from 'ng2-charts';
import { SachartComponent } from './Charts/commentsForTopic/sachart.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import {  FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/in-memory-data.service';
import { LoaderComponent } from './views/loader/loader.component';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './modal/modal.component';
import { AdminHeaderComponent } from './components/headers/admin-header/admin-header.component';
import { TestComponent } from './test/test.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { XchartComponent } from './Charts/CommentForSentimentchart/xchart.component';
import { YchartComponent } from './Charts/EvolutionchartSenti/ychart.component';
import { ZchartComponent } from './Charts/DistributionchartSentiment/zchart.component';
import { DataAnnotationComponent } from './components/data-annotation/data-annotation.component';
import { DataTablesModule } from "angular-datatables";
import { SentTablesComponentComponent } from './views/admin/sent-tables-component/sent-tables-component.component';
import { CartTableSentimentsComponent } from './components/cards/cart-table-sentiments/cart-table-sentiments.component';
import { CardTypeColorPipe } from './components/cards/cart-table-sentiments/card-type-color.pipe';
import { SentimentalStatsComponent } from './views/admin/sentimental-stats/sentimental-stats.component';
import { CardSentimentComponent } from './components/cards/card-sentiment/card-sentiment.component';
import { TopicStatsComponent } from './views/admin/topic-stats/topic-stats.component';
import { TopicListComponent } from './views/admin/topic-list/topic-list.component';
import { TopicChartComponent } from './views/admin/topic-chart/topic-chart.component';
import { SentChartComponent } from './views/admin/sent-chart/sent-chart.component';
import { CartTableTopicComponent } from './components/cart-table-topic/cart-table-topic.component';
import { DataAnnotComponent } from './views/admin/data-annot/data-annot.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HomeSMComponent } from './views/admin/home-sm/home-sm.component';
import { AboutSMComponent } from './views/admin/about-sm/about-sm.component';
import { ServiceSMComponent } from './views/admin/service-sm/service-sm.component';
import { SentimentSMComponent } from './views/admin/sentiment-sm/sentiment-sm.component';
import { TopicSMComponent } from './views/admin/topic-sm/topic-sm.component';
import { ContactSMComponent } from './views/admin/contact-sm/contact-sm.component';
import { TachartComponent } from './Charts/DistriburtionChartTopic/tachart.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';


@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    ChartComponent,
    SachartComponent,
    TachartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    StatsComponent,
    LoaderComponent,
    ModalComponent,
    AdminHeaderComponent,
    TestComponent,
    XchartComponent,
    YchartComponent,
    ZchartComponent,
    DataAnnotationComponent,
    SentTablesComponentComponent,
    CartTableSentimentsComponent,
    CardTypeColorPipe,
    SentimentalStatsComponent,
    CardSentimentComponent,
    TopicStatsComponent,
    TopicListComponent,
    TopicChartComponent,
    SentChartComponent,
    CartTableTopicComponent,
    DataAnnotComponent,
    TextAreaComponent,
    HomeSMComponent,
    AboutSMComponent,
    ServiceSMComponent,
    SentimentSMComponent,
    TopicSMComponent,
    ContactSMComponent,
    AccessDeniedComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    AngularEditorModule,
    //environment.production ?[] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation : false } ),
    NgChartsModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
