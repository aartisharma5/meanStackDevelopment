import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ DataService ]
})
export class TodoComponent implements OnInit {
  itemList: Item[]=[];
  selectedItem: Item;

  constructor(private dataService: DataService) { }
     
  getItems(){

    this.dataService.gettodoItem()
    .subscribe(
      items =>{
      this.itemList = items;
      }
    )
  }

  addItem(form){
    let newItem: Item ={
      itemName: form.value.itemName,
      itemDone: false
    }
    this.dataService.addtodoItem(newItem)
    .subscribe(
      result =>{
      console.log(result);
      this.getItems();
      }
    )
  }
  updateItem(form){
    let newItem: Item ={
      itemName: form.value.itemName,
      itemDone: false
    }
    this.dataService.updatetodoItem(newItem)
    .subscribe(
      result =>{
      console.log(result);
      }
    )
  }
  deleteItem(form){
    let newItem: Item ={
      itemName: form.value.itemName,
      itemDone: false
    }
    this.dataService.deletetodoItem(newItem)
    .subscribe(
      result =>{
      console.log(result);
      }
    )
  }


  updateCheckBox(item){
    item.itemDone = !item.itemDone;
    this.dataService.updatetodoItem(item)
    .subscribe(
    result=>{
    console.log(result);
    this.getItems();
    })
  }

  deleteItem(item){
    this.dataService.deletetodoItem(item)
    .subscribe(
    result=>{
    console.log(result);
    this.getItems();
    })
  }
  ngOnInit() {
     this.getItems();
  }

}
