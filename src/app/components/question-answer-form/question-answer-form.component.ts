import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/datamodel/answer';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-question-answer-form',
  templateUrl: './question-answer-form.component.html',
  styleUrls: ['./question-answer-form.component.css']
})
export class QuestionAnswerFormComponent implements OnInit {

  answer: Answer = new Answer("text");

  constructor(private examService:ExamService) { }
 
  ngOnInit(): void {
  }

  
  show(){
    alert(this.answer.content);
  }

  save(){
    //this.examService.save(this.answer);
    
  }

}
