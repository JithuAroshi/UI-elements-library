import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(@Inject(DOCUMENT) private document:Document, private renderer: Renderer2 ) {}

 switchMode(isDarkMode:boolean){

  // -----------------------Angular-DarkMode----------------- //

const hostClass = isDarkMode ? 'theme-dark' : 'theme-light';
this.renderer.setAttribute(this.document.body, 'class', hostClass);

// -----------------------Tailwind-DarkMode----------------- //

const rootPage = this.document.getElementById('rootPage');

if(isDarkMode){
  rootPage?.classList.add('dark');
}else{
  rootPage?.classList.remove('dark');
}

 }
}
