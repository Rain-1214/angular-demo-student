import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from '../heroes/hero.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../heroes/hero-detail.component';
import { PropertyComponent } from '../study/property/property.component';
import { LifeComponent } from '../study/lifecycleHooks/life.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'life',
    component: LifeComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
