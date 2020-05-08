import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/datamodel/exam';
import { ExamService } from 'src/app/services/exam.service';
import { Location } from '@angular/common'
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  exam: Exam = new Exam()
  title:string
  isedit : boolean = false

  constructor(private examService: ExamService,private location :Location, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
          this.exam = JSON.parse(params.special)
       }
        this.isedit = (params && params.special) ? true : false
        console.log(this.isedit)
        this.title = this.isedit == false ? "Add Exam":"Edit Exam"
      });
  }

  ngOnInit(): void {
  }

  
  save(){
    console.log(this.exam.title)
    if (this.isedit == false){
      this.addexam()
    }else{
      this.editExam()
    }
  }


  addexam(){
    this.examService.post(this.exam,(response:Exam)=>{
      console.log(response)
      this.exam = response
      alert("Exam inserted success here");
      this.location.back()      
    })
  }

  editExam(){
    this.examService.put(this.exam,(response:Exam)=>{
      alert("Exam Updated success");
      this.location.back() 
    })
  }
}
