import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
name:string='';
@Output() getData=new EventEmitter();
// reading input text
getName(discrip:any)
{
  this.name=discrip.target.value;
  // console.log(this.name);
  this.getData.emit(this.name)
}
}
