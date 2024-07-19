import { Component, input } from '@angular/core';

@Component({
  selector: 'app-deshboard-item',
  standalone: true,
  imports: [],
  templateUrl: './deshboard-item.component.html',
  styleUrl: './deshboard-item.component.css',
  host:{
    class : "dashboard-item"
  }
})
export class DeshboardItemComponent {
  image = input.required<{src : string , alt : string}>()
  title = input.required<string>()
}
