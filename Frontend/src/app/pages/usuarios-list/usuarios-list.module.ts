import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuariosListPageRoutingModule } from './usuarios-list-routing.module';
import { UsuariosListPage } from './usuarios-list.page';
import { UsuarioService } from 'src/app/services/usuario.service';  // Certifique-se de que o caminho está correto
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosListPageRoutingModule,
    HttpClientModule  // Adicione aqui também, se não estiver importado no app.module.ts
  ],
  declarations: [UsuariosListPage],
  providers: [UsuarioService]  // Adicionar o serviço aqui explicitamente
})
export class UsuariosListPageModule {}
