import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {

  constructor(public element: ElementRef) {
  }

  ngOnInit() {
  }

}
