import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { APP_NAME } from './../../app.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{

  appName = APP_NAME;
  colorIndex = 0;
  isDisable: boolean;
  text = 'Caneta Azul';

  ngOnInit(){
    console.log('On Init');
    this.isDisable = true;

    setInterval(() => {
      this.colorIndex = (this.colorIndex + 1) % 3;
    }, 500);
  }

  ngAfterViewInit(){
    console.log('After View Init');
  }

  ngOnDestroy(){
    console.log('OnDestroy');
  }

  onClick(event: any){
    console.log('Event Property: ', event);
  }

}
