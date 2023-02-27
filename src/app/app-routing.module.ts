import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";

import {LandingComponent} from "./component/landing/landing.component";
import {WikiComponent} from "./component/wiki/wiki.component";
import {TiendaComponent} from "./component/tienda/tienda.component";

const routes: Routes = [
  {path: '',component: LandingComponent},
  {path: 'wiki', component: WikiComponent},
  {path: 'tienda', component: TiendaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
