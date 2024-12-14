import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  openSearchNav() {
    // .getElementById("mySearchnav").style.width = "450px";
  }
  
  closeSearchNav() {
    // document.getElementById("mySearchnav").style.width = "0";
  }
}
