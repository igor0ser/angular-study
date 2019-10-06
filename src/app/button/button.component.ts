import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  counter = 0
  @Output() cc = new EventEmitter<number>();

  increment() {
    this.counter++;

    this.cc.emit(this.counter);
  }

  reset(event: Event) {
    event.preventDefault()
    this.counter = 0;

    this.cc.emit(this.counter);
  }

  constructor() { }

  ngOnInit() {
  }

}
