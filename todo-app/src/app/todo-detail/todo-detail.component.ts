import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass'],
})
export class TodoDetailComponent implements OnInit {
  @Input() todo?: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id).subscribe((todo) => (this.todo = todo));
  }

  save(): void {
    this.todoService.updateTodo(this.todo)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
