import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/datamodel/question';
import { QuestionService } from 'src/app/services/question.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-questiono-form',
  templateUrl: './questiono-form.component.html',
  styleUrls: ['./questiono-form.component.css']
})
export class QuestionoFormComponent implements OnInit {

  question : Question = new Question() 
  title:string
  isedit : boolean = false

  constructor(private questionservice:QuestionService,private location :Location,private route: ActivatedRoute) { 
       this.route.queryParams.subscribe(params => {
        if (params && params.special) {
              this.question = JSON.parse(params.special)
            }
            this.isedit = (params && params.special) ? true : false
            console.log(this.isedit)
            this.title = this.isedit == false ? "Add Question":"Edit Question"
       });

  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.question.title)
    console.log(this.question.title)
    if (this.isedit == false){
      this.addQuestion()
    }else{
      this.editQuestion()
    }
  }

  
  addQuestion(){
    this.questionservice.post(this.question,(response:Question)=>{
      console.log(response)
      this.question = response
      alert("Question inserted success here");
      this.location.back()      
    })
  }
  editQuestion(){
    this.questionservice.put(this.question,(response:Question)=>{
      alert("Question Updated success");
      this.location.back()  
    })
  }
}
