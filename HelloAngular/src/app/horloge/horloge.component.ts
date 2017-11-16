import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello-horloge',
  template: `
    <p>{{now | date:format }}</p>
  `,
  styles: [],
  exportAs: 'horlogeCmp',
})
export class HorlogeComponent implements OnInit, OnDestroy {

  public now: Date;
  private intervalId: number;

  @Input()
  public format = 'HH:mm:ss';

  /*
  @Input()
  public date = 'HH:mm:ss';
  */

  @Output()
  public dateChange = new EventEmitter<Date>();

  constructor() {
     
  }

  ngOnInit() {
    this.now = new Date();
    this.intervalId = setInterval(() => {
      this.now = new Date();
      this.dateChange.emit(this.now);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
