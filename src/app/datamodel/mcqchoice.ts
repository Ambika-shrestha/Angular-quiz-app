import { Question } from './question';

export class McqChoice{
    public id: number;
	public choice:string;
	public valid: boolean;
	public question: Question;

    constructor(id:number=null,choice:string=null,valid:boolean=null,question:Question=null){
        this.id=id 
        this.choice=choice   /**
        MCQ CHOICE TEXT
        */
        this.valid=valid
        this.question=this.question
    }



}