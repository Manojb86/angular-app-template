import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  @Input() modalHeaderText: string;
  @Input() modalBodyText: string;
  @Input() okButtonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
