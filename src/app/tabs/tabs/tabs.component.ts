import {
  AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild,
  ViewChildren
} from '@angular/core';
import {TabComponent} from './tab/tab.component';
import {TabContentComponent} from './tab/tab-content/tab-content.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ViewChild('list') list: ElementRef;
  @ViewChild('content') content: ElementRef;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tabs.map((tab: TabComponent, index) => {
      const li = this.renderer.createElement('li');
      this.renderer.listen(li, 'click', this.onClick.bind(this, index));
      this.renderer.appendChild(li, tab.tabTitle.element.nativeElement);
      this.renderer.appendChild(this.list.nativeElement, li);
    });
    if (this.tabs.length) {
      this.setContent(this.tabs.toArray()[0].tabContent);
    }
  }

  /**
   * li on click
   * @param id
   * @param event
   */
  onClick(id, event) {
    const tabContent = this.tabs.toArray()[id].tabContent;
    this.setContent(tabContent);
  }

  /**
   * set template content with tabContent
   * @param tabContent
   */
  setContent(tabContent: TabContentComponent) {
    this.content.nativeElement.innerHTML = '';
    this.renderer.appendChild(this.content.nativeElement, tabContent.element.nativeElement);
  }

}
