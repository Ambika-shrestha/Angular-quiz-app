import { Injectable } from '@angular/core';
import { McqChoice } from '../datamodel/mcqchoice';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class McqChoiceService {


  constructor(private httpClient:HttpClient) { }


  post(mcqchoice:McqChoice,cb:(response:McqChoice)=>void){
    let url : string ="http://localhost:8080/quiz-rest/rest/mcqchoice/createChoice";
    this.httpClient.post<McqChoice>(url,mcqchoice).subscribe((data:McqChoice)=> 
      cb(data)
     );
   }
  
   get(id:Number,cb:(response:McqChoice[])=>void){
    let url : string = "http://localhost:8080/quiz-rest/rest/mcqchoice/getAllChoice/" +id;
    this.httpClient.get<McqChoice[]>(url).subscribe((data:McqChoice[]) =>
      cb(data)
    );
  }
   
  put(mcqchoice:McqChoice,cb:(response:McqChoice)=>void){
    let url : string = "http://localhost:8080/quiz-rest/rest/mcqchoice/updateMcqChoice";
    this.httpClient.put<McqChoice>(url,mcqchoice).subscribe((data:McqChoice)=>
    cb(data)
    )
  }
  delete(id:Number,cb:(response:McqChoice)=>void){
    let url : string = "http://localhost:8080/quiz-rest/rest/mcqchoice/deleteMcqChoice/" +id;
    this.httpClient.delete<McqChoice>(url).subscribe((data:McqChoice) =>
      cb(data)
    );
  }
}
