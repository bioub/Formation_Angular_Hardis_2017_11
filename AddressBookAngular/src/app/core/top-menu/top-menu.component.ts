import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'address-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
