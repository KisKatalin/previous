import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() newTask!: string;
  @Input() arr: any;
  @Output() fromChild = new EventEmitter;
  public editTaskInpt = '';
  public show = false;
public indexForSale! : number;
  constructor() { }
  ngOnInit(): void {
  }
  getCounts(): void {
    this.fromChild.emit(this.arr.length)
  }
  editTask(index: number): void {
this.show = true;
this.indexForSale = index;
this.editTaskInpt = this.arr[index].task;
  }
  saveEditTask() : void{
    this.arr[this.indexForSale].task = this.editTaskInpt;
    this.show = false;
    this.editTaskInpt = '';
  }
  isChecked(index: number) {
    if (this.arr[index].check == true) {
      this.arr[index].check = false;
    } else {
      this.arr[index].check = true;
    }
  }
  deleteTask(index: number): void {
    this.arr.splice(index, 1);
    this.getCounts();
  }

}
