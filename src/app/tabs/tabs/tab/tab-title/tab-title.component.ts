import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css']
})
export class TabTitleComponent implements OnInit {

  constructor(public element: ElementRef) {
  }

  ngOnInit() {
  }

}
