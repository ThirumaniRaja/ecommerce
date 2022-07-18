import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/services/crud-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private crudHttpService: CrudHttpService) { }
  todoList:any = [];
  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.crudHttpService.list().pipe().subscribe((data)=>{
      this.todoList = data;
    },error=>{

    })
  }

  createTodo(){
    let userValue = prompt("Please enter user name");
    if (userValue != null) {
      let todo = {
        id: new Date().getTime(),
        title:`New Data Created for ${userValue}` 
      }
      this.crudHttpService.create(todo).subscribe((response)=>this.listTodos());
    }
   
  }

  editTodo(todo: any){
    let userValue = prompt("Edit user name");
    if (userValue != null) {
    let data = {
      id: new Date().getTime(),
      title:`Updated User is ${userValue}` 
    }
    this.crudHttpService.update(todo.id,data).subscribe((response)=>this.listTodos());
  }
}

  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=> this.listTodos());
  }

}
