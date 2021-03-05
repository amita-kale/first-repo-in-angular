import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'tables-root',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  title1 = 'first-repo-in-angular1';
  type = "text";
  placeholder = "amita kale"
  count = 0;

  Tabletitle = "Table";
  Formtitle = "Form";

  tables = [
    {
      sr_no: 1,
      FName: 'Amita',
      LName: 'Kale',

    },
    {
      sr_no: 2,
      FName: 'Aniket',
      LName: 'Kalee',

    },
    {
      sr_no: 3,
      FName: 'Ashvini ',
      LName: 'Kaleee',

    },
  ];


  buttonClicked() {
    console.log("submit pressed");

  }
  myEvent(evt) {
    console.log(evt);
  }
  incrementValue() {
    this.count++;
  }

  onInput(e) {
    console.log(e.target.value);
    this.title1 = e.target.value;//this is for changing title1 as per input text
  }
  color = '';
  changeColor(color) {
    this.color = color;
  }

}
