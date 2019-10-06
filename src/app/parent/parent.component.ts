import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  age: number

  onCC(age) {
    console.log({ age });
    this.age = age
  }

  constructor() { }

  ngOnInit() {
  }

}
