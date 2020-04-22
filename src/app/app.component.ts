import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',

 templateUrl: './app.component.html',


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private service: ServiceService) {
    this.questions$ = service.getQuestions();
    this.changeText = false;
  }

  title = 'Dynamic Form';
  changeText: boolean;
  

  ngOnInit(): void {
this.service.getdata().subscribe(data=>this.sales=data); 
   
  }
 
  sales=[]
  form: FormGroup;
  payLoad = '';
  mouseover(){
   
   }
   counter=1
}
