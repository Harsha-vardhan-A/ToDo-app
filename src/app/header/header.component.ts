import { Component, EventEmitter, Output } from '@angular/core';
import {CommoninputsService } from '../commoninputs.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  add:string='add';
  name:string='';
  discription:string='';
  @Output() getdata:any = new EventEmitter();
  constructor(private data:CommoninputsService){
    
  }
  // gettting name and description from inputs
  recieveNameFromCommon(event:string)
  {
    this.name=event;
    // console.log(this.name)
  }
  recieveDataFromCommon(event:string)
  {
    this.discription=event;
  //  console.log(this.discription)
  }
  passData()
  {
    if(this.name==''||this.discription=='')
    {
      alert("enter data");
    }
    else
    {
      this.data.alldetails.push({name:this.name,desc:this.discription});
    }
  }
}


