import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [
    {
      'name': 'John Doe',
      'age': 25,
      'email': 'john.doe@email.com'
    },
    {
      'name': 'foo bar',
      'age': 20,
      'email': 'foo.bar@email.com'
    }
  ];

  addContent() {
    const count = this.items.length + 1;
    this.items.push({
      'name': 'name ' + count,
      'age': count,
      'email': 'email' + count + '@email.com'
    });
  }

  gneratePDF() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.fromHTML(document.getElementById('pdf'), 15, 15, {
      'width': 170,
      'elementHandlers': {
        '#pdf': function (element, renderer) {
          return true;
        }
      }
    });
    window.open(pdf.output('bloburl'), '_blank');
  }
}
