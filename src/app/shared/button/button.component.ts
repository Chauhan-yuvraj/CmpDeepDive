import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host:{
    '(click)' : 'Onclick()' 
  }
})
export class ButtonComponent {
  Onclick(){
    console.log("Clicked !!")
  }
}
