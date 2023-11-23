import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { InfoComponent } from './info/info.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    PlansComponent,
    LoginComponent,
    IntroComponent,
    InfoComponent,
    QuestionnaireComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlansComponent,
    LoginComponent,
    IntroComponent,
    InfoComponent,
    QuestionnaireComponent,
    ResultsComponent
  ]
})
export class InsideModule { }
