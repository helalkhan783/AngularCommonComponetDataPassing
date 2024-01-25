import {Component} from '@angular/core';

@Component({
  selector: 'app-two-way-data-parsing',
  templateUrl: './two-way-data-parsing.component.html',
  styleUrls: ['./two-way-data-parsing.component.css']
})
export class TwoWayDataParsingComponent {
  email = "";
  number = "";


  save() {
    this.number = this.email
  }
}
