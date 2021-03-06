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

  // public FName: string;
  // public LName: string;

  // public rows: Array<{ FName: string, LName: string }> = [];

  // buttonClicked() {
  //   this.rows.push({
  //     FName: this.FName,
  //     LName: this.LName
  //   });

  //   //if you want to clear input
  //   this.FName = null;
  //   this.LName = null;

  // }

  buttonClicked(Ftext, Ltext) {
    // console.log(Ftext.value + " " + Ltext.value);
    const obj = {
      sr_no: this.tables.length + 1,
      FName: Ftext.value,
      LName: Ltext.value,
    };
    this.tables.push(obj);


  }
  myEvent(evt) {
    console.log(evt.target.value);
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
