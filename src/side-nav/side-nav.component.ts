import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  searchIcon = false;

  ngOnInit(): void {
  }

  openSearchNav() {
    // .getElementById("mySearchnav").style.width = "450px";
    this.searchIcon = true;
  }
  
  closeSearchNav() {
    // document.getElementById("mySearchnav").style.width = "0";
  }
}
