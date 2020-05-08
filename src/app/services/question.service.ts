import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../datamodel/question';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseurl : string = "http://localhost:8080/quiz-rest/rest/"
  constructor(private httpClient:HttpClient) { }

  post(question:Question, cb:(response:Question)=>void){
    let url : string = this.baseurl + "question/save";
    this.httpClient.post<Question>(url, question).subscribe((data:Question) =>
      cb(data)
    );
  }

  get(cb:(response:Question[])=>void){
    let url : string = this.baseurl + "question/getAllQuestion";
    this.httpClient.get<Question[]>(url).subscribe((data:Question[]) =>
      cb(data)
    );
  }

  delete(id:string,cb:(response:Question)=>void){
    let url : string ="http://localhost:8080/quiz-rest/rest/question/deleteQuestion/"+id;
    this.httpClient.delete<Question>(url).subscribe((data:Question)=>
      cb(data)
    );  
  }
  put(question:Question,cb:(response:Question)=>void){
    let url : string ="http://localhost:8080/quiz-rest/rest/question/updateQuestion";
    this.httpClient.put<Question>(url,question).subscribe((data:Question)=>
      cb(data)
      ); 
  }
}
