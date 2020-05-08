import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Question } from 'src/app/datamodel/question';
import { QuestionService } from 'src/app/services/question.service';
import { Exam } from 'src/app/datamodel/exam';
import { ExamService } from 'src/app/services/exam.service';
import { McqChoice } from 'src/app/datamodel/mcqchoice';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {
  [x: string]: any;

  listquestion : Question[] = []
  listExam : Exam[]=[]
  constructor(private router:Router,private questionservice:QuestionService,private examService: ExamService) {
    this.getAllQuestion()
    this.getAllExam()
  }

  ngOnInit(): void {
  }

  getAllExam(){
    this.examService.get((response:Exam[])=>{
      this.listExam = response
    })
  }
  getAllQuestion(){
    console.log("constructor call")
    this.questionservice.get((listquestion:Question[])=>{
      this.listquestion = listquestion
      console.log(listquestion)
    })
  }

  add(){
    console.log("Ambika")
    this.router.navigate(['question'])
  }


  edit(event:Event){
    let id = (event.target as Element).id
    this.router.navigate(['question'])
    console.log(id)

  }

  deleteQuestion(event:Event){
    let id = (event.target as Element).id
    console.log(id)
    this.questionservice.delete(id,(response:Question)=>{
      console.log(response)
      let question : Question =this.listquestion.filter(x => x.id === response.id)[0]
      this.listquestion.splice(this.listquestion.indexOf(question),1)
      
    })
  }

  editQuestion(event:Event){
    let id =(event.target as Element).id
    console.log(id)
    let question:Question =this.listquestion.filter(x => x.id === Number(id))[0];
    let navigationExtras : NavigationExtras ={
      queryParams: {
        special:JSON.stringify(question)
      }
    };
      this.router.navigate(["question"],navigationExtras)
    }

  addExam(){
    this.router.navigate(['exam'])
  }

  deleteExam(event:Event){
    let id = (event.target as Element).id
    this.examService.delete(id,(response:Exam)=>{
      console.log(response)
      let exam : Exam = this.listExam.filter(x => x.id === response.id)[0];
      this.listExam.splice(this.listExam.indexOf(exam),1)
    })    
  }

  editExam(event:Event){
    let id =(event.target as Element).id
    console.log("load data")
    let exam : Exam = this.listExam.filter(x=>x.id === Number(id))[0];
    console.log(exam)    
    let navigationExtras: NavigationExtras = {
        queryParams: {
            special:JSON.stringify(exam)
      }
    };
    this.router.navigate(["exam"],navigationExtras)
     // let exam : Exam = localStorage.setItem()

  }

  addChoice(event:Event){
    let id =(event.target as Element).id
    console.log("This is choice eventand id number " +id)
    let question : Question = this.listquestion.filter(x=>x.id === Number(id))[0];
    console.log(question)    
    let navigationExtras: NavigationExtras = {
        queryParams: {
            special:JSON.stringify(question)
      }
    };
    this.router.navigate(['mcqchoice'],navigationExtras)
  }
}
