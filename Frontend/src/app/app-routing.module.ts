import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'eventos-list', pathMatch: 'full' },
  { path: 'eventos-list', loadChildren: () => import('./pages/eventos-list/eventos-list.module').then(m => m.EventosListPageModule) },
  { path: 'evento-form', loadChildren: () => import('./pages/evento-form/evento-form.module').then(m => m.EventoFormPageModule) },
  { path: 'evento-form/:id', loadChildren: () => import('./pages/evento-form/evento-form.module').then(m => m.EventoFormPageModule) },
  { path: 'usuarios-list', loadChildren: () => import('./pages/usuarios-list/usuarios-list.module').then(m => m.UsuariosListPageModule) },
  { path: 'usuario-form', loadChildren: () => import('./pages/usuario-form/usuario-form.module').then(m => m.UsuarioFormPageModule) },
  { path: 'usuario-form/:id', loadChildren: () => import('./pages/usuario-form/usuario-form.module').then(m => m.UsuarioFormPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
