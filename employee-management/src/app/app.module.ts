import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  exports: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    PaginationComponent,
    CardViewComponent
  ],
  imports: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    CardViewComponent,
    PaginationComponent,
    RouterOutlet,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
