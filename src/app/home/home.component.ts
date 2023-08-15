import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface MyFormData {
  choice: string | null;
  choiceTransport: string | null;
  kind: string | null;
  prefer: string | null;
  carBrand: string | null;
  reason: string | null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('myForm') myForm!: NgForm;
  constructor() {};
  formData: MyFormData[] = []

  choice:string | null = null;
  choiceTransport:string | null = null;
  kind:string | null = null;
  prefer:string | null = null;
  carBrand:string | null = null;
  reason:string | null = null;
  
  
  onSubmit(){
    if(this.myForm.valid){
      const formValue = {...this.myForm.value};
      this.formData.push(formValue);
      this.myForm.reset();
      console.log(this.formData);
    }
  }
}
