import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  //@Input able to pass data from outside into this component. Do not forget to import it
  @Input() number: number;
  constructor() { }

  ngOnInit(): void {
  }

}
