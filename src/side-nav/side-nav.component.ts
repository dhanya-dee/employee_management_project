import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [NgIf, NgClass],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  @ViewChild('mySearchnav') mySearchnav!: ElementRef;

  searchIcon = false;

  ngOnInit(): void {
  }

  openSearchNav() {
    this.mySearchnav.nativeElement.style.width = "200px";
    this.mySearchnav.nativeElement.style.marginLeft = "222px";
    this.mySearchnav.nativeElement.style.zIndex = "1";
    this.searchIcon = true;
  }
  
  closeSearchNav() {
    this.mySearchnav.nativeElement.style.width = "200px";
    this.mySearchnav.nativeElement.style.marginLeft = "0px";
    this.mySearchnav.nativeElement.style.zIndex = "0";
    this.searchIcon = false;
  }
}
