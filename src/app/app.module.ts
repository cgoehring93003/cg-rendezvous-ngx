import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams} from "@angular/common/http";
//import { HttpDataService } from './http-data-service.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AppointmentService } from './appointment.service';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { LoginRequiredGuard } from './guards/login-required.guard';
import { LoginNotRequiredGuard } from './guards/login-not-required.guard';
import { DateFormatPipe } from './date-format.pipe';
import { TimeFormatPipe } from './time-format.pipe';


import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AltViewComponent } from './alt-view/alt-view.component';
import { Alt2ViewComponent } from './alt2-view/alt2-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    LoginComponent,
    EditComponent,
    SearchPageComponent,
    DateFormatPipe,
    TimeFormatPipe,
    AltViewComponent,
    Alt2ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,   
    /*DateFormatPipe,  These don't go here for some reason
    TimeFormatPipe,      */
    MatButtonModule, MatCheckboxModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {   
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginNotRequiredGuard]
      },
     {   
        path: 'edit',
        component: EditComponent,
        canActivate: [LoginRequiredGuard]
      },
     {   
        path: 'search',
        component: SearchPageComponent,
        canActivate: [LoginNotRequiredGuard]        
      },
     {   
        path: 'alt-view',
        component: AltViewComponent,
        canActivate: [LoginNotRequiredGuard]        
      },  
     {   
        path: 'alt2-view',
        component: Alt2ViewComponent,
        canActivate: [LoginNotRequiredGuard]        
      }, 

      {
        path: '**', 
        component:  PageNotFoundComponent,
        canActivate: [LoginNotRequiredGuard]
      }


    ],
     { enableTracing: true }
  )],
  providers: [AppointmentService, LoginRequiredGuard, LoginNotRequiredGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
