import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router } from '@angular/router';
import { QuestionAnswerFormComponent } from './components/question-answer-form/question-answer-form.component';
import { from } from 'rxjs';
import { QuestionoFormComponent } from './components/questiono-form/questiono-form.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { McqchoiceFormComponent } from './mcqchoice-form/mcqchoice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionAnswerFormComponent,
    QuestionoFormComponent,
    HomeFormComponent,
    ExamFormComponent,
    McqchoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
