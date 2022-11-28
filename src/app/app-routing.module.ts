import { ContactSMComponent } from './views/admin/contact-sm/contact-sm.component';
import { SentimentSMComponent } from './views/admin/sentiment-sm/sentiment-sm.component';
import { TopicSMComponent } from './views/admin/topic-sm/topic-sm.component';
import { ServiceSMComponent } from './views/admin/service-sm/service-sm.component';
import { AboutSMComponent } from './views/admin/about-sm/about-sm.component';
import { HomeSMComponent } from './views/admin/home-sm/home-sm.component';
import { TopicStatsComponent } from './views/admin/topic-stats/topic-stats.component';
import { TopicListComponent } from './views/admin/topic-list/topic-list.component';
import { SentimentalStatsComponent } from './views/admin/sentimental-stats/sentimental-stats.component';
import { DataAnnotationComponent } from './components/data-annotation/data-annotation.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { AdminComponent } from "./layouts/auth/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";


// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { SentTablesComponentComponent } from './views/admin/sent-tables-component/sent-tables-component.component';
import { DataAnnotComponent } from './views/admin/data-annot/data-annot.component';
import { TopicChartComponent } from './views/admin/topic-chart/topic-chart.component';
import { SentChartComponent } from './views/admin/sent-chart/sent-chart.component';

const routes: Routes = [

  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },

      //USERS
      { path: "USER_MANAGEMENT", component: SettingsComponent },
      { path: "tables", component: TablesComponent },

      //SENTIMENT ANALYSIS
      { path: "Sentimentstables", component: SentTablesComponentComponent },
      { path: "SentimentstStates", component: SentimentalStatsComponent },
      { path: "SentimentstChart", component: SentChartComponent },

      //TOPIC ANALYSIS
      { path: "Topictables", component: TopicListComponent },
      { path: "TopicStates", component: TopicStatsComponent },
      { path: "TopicChart", component: TopicChartComponent },

      //VISITOR PAGE MANAGEMENT
      { path: "HomeSM", component: HomeSMComponent },
      { path: "AboutSM", component: AboutSMComponent },
      { path: "ServiceSM", component: ServiceSMComponent },
      { path: "TopicSM", component: TopicSMComponent },
      { path: "SentimentSM", component: SentimentSMComponent },
      { path: 'ContactSM', component: ContactSMComponent },



      { path: "dataAnnotation", component: DataAnnotComponent },

      { path: "maps", component: MapsComponent, canActivate: [AuthGuard] },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
