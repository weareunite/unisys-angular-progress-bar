import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'lib-unisys-angular-progress-bar',
  templateUrl: './unisys-angular-progress-bar.component.html',
  styles: []
})
export class UnisysAngularProgressBarComponent implements OnInit, OnChanges {
  @Input('state') state:string = '';
  @Input('percentage') percentage;
  public classPrefix = 'progress-bar-';
  public class = '';

  constructor() {
  }

  ngOnInit() {
    this.getClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    const percentage = changes.percentage;

    if(percentage.currentValue != percentage.previousValue){
      this.getClass();
    }
  }

  getClass(){
    if(this.state == ''){
      if(this.percentage < 80){
        this.class =  this.classPrefix+'success';
      }else if(this.percentage < 100){
        this.class =  this.classPrefix+'yellow';
      }else{
        this.class =  this.classPrefix+'danger';
      }
    }else{
      this.class = this.classPrefix+'primary'
    }
  }

}
