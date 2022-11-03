import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo';
  disablebutton:boolean = true;
  values:string = " ";

  Employees=[
    {name:"dhanesh",designation:"web developer"},
    {name:"vajagani",designation:"MERN developer"},
    {name:"alex hales",designation:"MEAN developer"}


  ]

  printvalue(){
    this.values = "hello dhanesh"
    console.log("hello");
    
  }
}
