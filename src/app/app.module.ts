import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { AboutComponent } from './about/about.component';
import { PrintdataComponent } from './printdata/printdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ReportsComponent } from './reports/reports.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SearchpatientComponent,
    AllpatientComponent,
    AboutComponent,
    PrintdataComponent,
    HeaderComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
