import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { LoginComponent } from './inside/login/login.component';
import { PlansComponent } from './inside/plans/plans.component';
import { IntroComponent } from './inside/intro/intro.component';
import { InfoComponent } from './inside/info/info.component';
import { QuestionnaireComponent } from './inside/questionnaire/questionnaire.component';
import { ResultsComponent } from './inside/results/results.component';

const routes: Routes = [
    {path:"", component:LandingPageComponent},
    {path:"plans", component:PlansComponent}, 
    {path:"login", component:LoginComponent},
    {path:"intro", component:IntroComponent},
    {path:"info", component:InfoComponent},
    {path:"questionnaire", component:QuestionnaireComponent},
    {path:"results", component:ResultsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
