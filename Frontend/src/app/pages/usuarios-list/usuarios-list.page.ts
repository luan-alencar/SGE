import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';  // Certifique-se de que o caminho está correto
import { Usuario } from 'src/app/domain/Usuario';  // Importe o tipo de usuário se estiver disponível

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.page.html',
  styleUrls: ['./usuarios-list.page.scss'],
})
export class UsuariosListPage implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Erro ao buscar usuários', error);
      }
    );
  }
}
