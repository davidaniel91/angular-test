import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'test-component', component: TestComponentComponent },
  { path: 'home-Component', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
