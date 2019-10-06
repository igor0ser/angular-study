import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {
  name: string
  @Input() age: number;

  constructor() { }

  ngOnInit() {
  }

}
