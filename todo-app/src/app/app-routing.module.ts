import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
