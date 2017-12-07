import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from '../heroes/hero.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../heroes/hero-detail.component';
import { PropertyComponent } from '../study/property/property.component';
import { LifeComponent } from '../study/lifecycleHooks/life.component';
import { ComCmucaComponent } from '../study/componentCommunication/comCommunication.component';
import { AdComponent } from '../study/dynamicComponent/ad.component';
import { AttrDirComponent } from '../study/attributeDirective/attr-dir.component';
import { StruDirComponent } from '../study/structrualDirective/stru-dir.component';
import { PipeComponent } from '../study/pipes/pipes.component';
import { AnimationComponent } from '../study/animation/animation.component';

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
    path: 'communication',
    component: ComCmucaComponent
  },
  {
    path: 'dynamic',
    component: AdComponent
  },
  {
    path: 'attrDir',
    component: AttrDirComponent
  },
  {
    path: 'struDir',
    component: StruDirComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
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
