import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-content',
  templateUrl: './dummy-content.component.html',
  styleUrls: ['./dummy-content.component.css']
})
export class DummyContentComponent implements OnInit {

  lineas:number[]=[1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
