import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { tarefasRoutes } from "./tarefas";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...tarefasRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
