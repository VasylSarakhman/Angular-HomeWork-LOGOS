import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { PhonebookComponent } from './pages/phonebook/phonebook.component';
import { TaskComponent } from './pages/skills/skills.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent},
  { path: 'phonebook', component: PhonebookComponent},
  { path: 'skills', component: TaskComponent},
  { path: '**', redirectTo: '/skills' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
