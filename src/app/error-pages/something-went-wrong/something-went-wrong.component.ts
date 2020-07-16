import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-something-went-wrong',
  templateUrl: './something-went-wrong.component.html',
  styleUrls: ['./something-went-wrong.component.scss']
})
export class SomethingWentWrongComponent implements OnInit {
  errorMessage: string = 'Opps !!! Something went wrong. Please try again.';
  constructor() { }

  ngOnInit(): void {
  }

}
