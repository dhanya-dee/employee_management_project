import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  exports: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    CardViewComponent
  ],
  imports: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    CardViewComponent,
    RouterOutlet,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
