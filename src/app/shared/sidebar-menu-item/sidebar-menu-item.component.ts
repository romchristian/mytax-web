import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.css']
})
export class SidebarMenuItemComponent implements OnInit {

  @Input() title:string;
  @Input() active:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
