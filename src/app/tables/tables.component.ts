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



  tables = [
    {
      rollNo: 1,
      name: 'Amita Kale',
      subject: 'Marathi',
      marks: 89,
    },
    {
      rollNo: 2,
      name: 'Aniket Kale',
      subject: 'Marathi',
      marks: 89,
    },
    {
      rollNo: 3,
      name: 'Ashvini Kale',
      subject: 'Marathi',
      marks: 89,
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
