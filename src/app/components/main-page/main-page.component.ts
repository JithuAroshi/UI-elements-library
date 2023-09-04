import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  isDarkMode = false;

  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();

  onDarkModeSwitch( { checked }: MatSlideToggleChange ){
    this.isDarkMode = ! this.isDarkMode;
  this.darkModeSwitched.emit(checked);
  }

}
