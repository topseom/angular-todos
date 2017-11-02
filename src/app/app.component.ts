import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lists = [];
  loading = false;
  constructor(public todos:TodosService){
    this.getList();
  }

  getList(){
    this.loading = true;
    this.todos.getAll().then((result)=>{
      if(result){
        this.loading = false;
        this.lists = result;
      }
    });
  }
  
  addNote(text:HTMLInputElement){
    if(text.value){
      this.loading = true;
      let data = {text:text.value};
      this.todos.add(data).then(result=>{
        this.loading = false;
        if(result){
          this.getList();
          text.value = null;
        }
      });
      
    }
  }

  done(object){
    this.loading = true;
    object['completed'] = true;
    this.todos.update(object).then((result)=>{
      this.loading = false;
      if(result){
        this.getList();
      }
    });
  }
  redo(object){
    this.loading = true;
    object['completed'] = false;
    this.todos.update(object).then((result)=>{
      this.loading = false;
      if(result){
        this.getList();
      }
    });
  }
  remove(id,index){
    this.loading = true;
    //this.todos.remove();
    //this.lists.splice(index,1);
    this.todos.remove(id).then((result)=>{
      this.loading = false;
      this.getList();
    });
  }
}


