import { SlicePipe } from '@angular/common';
import { Component, Input} from '@angular/core';
import {CommoninputsService } from '../commoninputs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() getdetails:any[]=[];
  d:object={name:'',desc:''};
  constructor(private data:CommoninputsService){
    this.getdetails=data.alldetails;
  }
  // deleting the details
  remove(event:number)
  {
    // console.log(typeof(this.getdetails));
    // console.log(this.getdetails[event]);
    this.data.alldetails.splice(event,1);
    
  }
}
