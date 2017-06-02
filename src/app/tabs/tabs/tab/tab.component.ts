import {AfterViewInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';
import {TabTitleComponent} from './tab-title/tab-title.component';
import {TabContentComponent} from './tab-content/tab-content.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterViewInit {

  @ContentChild(TabTitleComponent) tabTitle: TabTitleComponent;
  @ContentChild(TabContentComponent) tabContent: TabContentComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }
}
