import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionoFormComponent } from './components/questiono-form/questiono-form.component';
import { QuestionAnswerFormComponent } from './components/question-answer-form/question-answer-form.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { from } from 'rxjs';
import { McqchoiceFormComponent } from './mcqchoice-form/mcqchoice-form.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'question',component:QuestionoFormComponent},
  {path:'anotherpage',component:QuestionAnswerFormComponent},
  {path:'home',component:HomeFormComponent},
  {path:'exam',component:ExamFormComponent},
  {path:'mcqchoice',component:McqchoiceFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
