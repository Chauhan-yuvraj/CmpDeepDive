import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; text: string }>();

  OnSubmit(titleInput: string, textareaInput: string) {
    // console.log('Title :' + titleInput + ' , Request :  ' + textareaInput);
    if (textareaInput.length != 0 && titleInput.length != 0) {
      this.add.emit({ title: titleInput, text: textareaInput });
      this.form().nativeElement.reset();
    } else {
      alert('please enter the details');
    }
  }
}
