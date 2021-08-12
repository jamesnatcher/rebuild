import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'skimmit';

  constructor() { }

  homeClick(){
    console.log("Home");
  }

  search(){
    console.log()
  }

  ngOnInit(): void {
  }

}
