import { Component } from '@angular/core';

 enum AgentStatus {
    available =1 ,
    busy = 2,
    away = 3,
    offline = 0
} 

@Component({
  selector: 'my-app',
  template: `
  <h1>Choose Value</h1>
  
  <select (change)="parseValue($event.target.value)">
    <option>--select--</option>
    <option *ngFor="let name of options"
        [value]="name">{{name}}</option>
  </select>
  
  <h1 [hidden]="myValue == null">
    You entered {{AgentStatus[myValue]}}
    <br>
    You are {{isOffline ? "offline" : "not offline"}}.
  </h1>`
})
export class AppComponent  {
 
  options : string[];
  myValue: AgentStatus;
  AgentStatus : typeof AgentStatus = AgentStatus;
  isOffline : boolean;
  
  ngOnInit() {
    var x = AgentStatus;
    console.log(x)
    var options = Object.keys(AgentStatus);
    console.log(options)
    this.options = options.slice(options.length / 2);
     console.log(this.options)
  }
  
  parseValue(value : string) {
    this.myValue = AgentStatus[value];
    console.log(this.myValue)
    this.isOffline = this.myValue == AgentStatus.offline;
  }
}
