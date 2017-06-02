import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tabs/tab/tab.component';
import {TabTitleComponent} from './tabs/tab/tab-title/tab-title.component';
import {TabContentComponent} from './tabs/tab/tab-content/tab-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent],
  exports: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule {
}
