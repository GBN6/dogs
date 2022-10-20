import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsComponent } from './dogs/dogs.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'dogs', component: DogsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
