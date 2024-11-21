import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { title: 'Listar Eventos', url: '/eventos-list', icon: 'calendar' },
    { title: 'Cadastrar Evento', url: '/evento-form', icon: 'add-circle' },
    { title: 'Listar Usuários', url: '/usuarios-list', icon: 'people' },
    { title: 'Cadastrar Usuário', url: '/usuario-form', icon: 'person-add' }
  ];
  
  public labels = [ 'Notes'];
  constructor() {}
}
