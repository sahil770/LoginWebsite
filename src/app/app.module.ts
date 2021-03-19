import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileComponent } from './profile/profile.component';

import{FormsModule}from '@angular/forms';
import{MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormstyleDirective } from './formstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    ProfileComponent,
    FormstyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
