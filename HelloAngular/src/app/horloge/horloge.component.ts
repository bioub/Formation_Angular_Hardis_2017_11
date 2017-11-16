import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'hello-horloge',
  template: `
    <p>{{now | date:'HH:mm:ss' }}</p>
  `,
  styles: [],
  exportAs: 'horlogeCmp',
})
export class HorlogeComponent implements OnInit, OnDestroy {

  public now: Date;
  private intervalId: number;

  constructor() {
     
  }

  ngOnInit() {
    this.now = new Date();
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
