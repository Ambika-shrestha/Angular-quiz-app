import { Component, OnInit } from '@angular/core';
import { McqChoice } from '../datamodel/mcqchoice';
import { McqChoiceService } from '../services/mcq-choice.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../datamodel/question';

@Component({
  selector: 'app-mcqchoice-form',
  templateUrl: './mcqchoice-form.component.html',
  styleUrls: ['./mcqchoice-form.component.css']
})
export class McqchoiceFormComponent implements OnInit {
  selectTrue = -1 
  mcqchoice : McqChoice = new McqChoice() 
  question : Question =new Question()
  listChoice : McqChoice[] = []
  constructor(private mcqchoiceservice:McqChoiceService,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
          this.question = JSON.parse(params.special)
          this.getAllChoice()
       }
      });
  }

  ngOnInit(): void {
  }

  save(){
    console.log("button clicked")
    this.mcqchoice.valid = this.selectTrue == 0 ? true : false
    this.mcqchoice.question = this.question
    console.log(this.mcqchoice)
    this.mcqchoiceservice.post(this.mcqchoice,(response:McqChoice)=>{
      console.log(response)
      this.mcqchoice = response
      alert("McqChoices inserted success here");    
      this.getAllChoice()
    })
  }

  getAllChoice(){
    this.mcqchoiceservice.get(this.question.id,(response:McqChoice[])=>{
    this.listChoice = response
  })
  }

  update(){
    this.mcqchoice.valid = this.selectTrue == 0 ? true:false
    this.mcqchoiceservice.put(this.mcqchoice,(response:McqChoice)=>{
    this.getAllChoice()
    })
  }

  editChoice(event: Event){
    let id =(event.target as Element).id
    console.log("This is choice eventand id number " +id)
    let mcqchoice : McqChoice = this.listChoice.filter(x=>x.id === Number(id))[0];
    console.log(mcqchoice)    
    this.mcqchoice = mcqchoice
    this.selectTrue = mcqchoice.valid == true ? 0 : 1
  }

  deleteChoice(event: Event){
    let id =(event.target as Element).id
    this.mcqchoiceservice.delete(Number(id),(respose:McqChoice)=>{
    this.getAllChoice()
    })
  }

}
