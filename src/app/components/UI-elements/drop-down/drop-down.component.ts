import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  IsSelected = false;
  values:any;


  select(){
this.IsSelected = !this.IsSelected
  }

  opSelect(){
    const op1 = document.getElementById('op1') as HTMLDivElement;

this.values = op1.textContent;

this.select()

  }

}
