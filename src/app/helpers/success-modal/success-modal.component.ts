import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  @Input() modalHeaderText: string;
  @Input() modalBodyText: string;
  @Input() okButtonText: string;
  @Output() redirectOnOk = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.redirectOnOk.emit();
  }

}
