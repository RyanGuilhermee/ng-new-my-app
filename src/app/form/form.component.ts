import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public alert: string = '';

  onClick() {
    this.alert = 'alert alert-success mb-5';
  }
}
