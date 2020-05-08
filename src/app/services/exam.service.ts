import { Injectable } from '@angular/core';
import { Answer } from '../datamodel/answer';
import { HttpClient } from '@angular/common/http';
import { Exam } from '../datamodel/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
 
  constructor(private httpClient:HttpClient) { }

 post(exam:Exam,cb:(response:Exam)=>void){
  let url : string ="http://localhost:8080/quiz-rest/rest/exam/createExam";
   this.httpClient.post<Exam>(url,exam).subscribe((data:Exam)=> 
    cb(data)
   );
 }

 get(cb:(response:Exam[])=>void){
  let url : string ="http://localhost:8080/quiz-rest/rest/exam/getAllExam";
  this.httpClient.get<Exam[]>(url).subscribe((data:Exam[])=>
  cb(data)
  );
 }
  
delete(id:string,cb:(response:Exam)=>void){
  let url : string ="http://localhost:8080/quiz-rest/rest/exam/deleteExam/"+id;
  this.httpClient.delete<Exam>(url).subscribe((data:Exam)=>
    cb(data)
  );
}
loadData(id:string,cb:(response:Exam)=>void){
  let url :  string ="http://localhost:8080/quiz-rest/rest/exam/loadData/"+id;
  this.httpClient.get<Exam>(url).subscribe((data:Exam)=>
  cb(data)
  );
}

put(exam:Exam,cb:(response:Exam)=>void){
  let url :  string ="http://localhost:8080/quiz-rest/rest/exam/updateExam";
  this.httpClient.put<Exam>(url,exam).subscribe((data:Exam)=>
    cb(data)
  );
}

}
