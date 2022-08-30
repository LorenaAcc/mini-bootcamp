import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  //@Input able to pass data from outside into this component. Do not forget to import it
  @Input() number: number;
  constructor() { }

  ngOnInit(): void {
  }

}
