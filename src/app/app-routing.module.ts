import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ModalComponent } from './modal/modal.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'home', component: HeroesComponent },
  { path: 'new', component: ModalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

