# Sistema de Gerenciamento de Eventos

<sub>*Este projeto foi desenvolvido durante a disciplina de Programação para Dispositivos Móveis e permite o cadastro de eventos, bem como o gerenciamento de inscrições. Ele consiste em um backend e um frontend completos.*</sub>

### Descrição Geral

Esta é uma aplicação para o gerenciamento de eventos, desenvolvida com **Spring Boot** no backend e **Ionic** no frontend. Suas funcionalidades incluem o cadastro, edição e exclusão de eventos, além de controle de usuários e gerenciamento de inscrições. O sistema possui perfis diferenciados para **usuários** e **administradores**, com funcionalidades específicas para cada perfil.

- **IDE Backend**: IntelliJ IDEA
- **IDE Frontend**: VSCode
- **Controle de Versão**: Git

### Backend

O backend foi desenvolvido utilizando **Java** com o framework **Spring Boot**. Para o armazenamento de dados, utilizamos **JPA** com integração ao banco de dados relacional **PostgreSQL**. Algumas das principais tecnologias usadas incluem:

- **Gerenciamento de Mudanças**: **Liquibase** foi usado para controlar as alterações no esquema do banco de dados.
- **Persistência de Dados**: **Spring Data JPA** para interação com o banco de dados.
- **Mensageria**: A comunicação assíncrona, como o envio e recebimento de emails, foi realizada através do **RabbitMQ**.
- **Integração**: Utilização de **Spring JMS** para integração com outros componentes do sistema.

### Frontend

O frontend foi construído com **Ionic**, uma poderosa ferramenta para aplicações móveis e PWA (Progressive Web Apps). As principais tecnologias usadas incluem:

- **Linguagens**: **TypeScript, HTML e CSS**.
- **Componentização**: Uso de componentes reutilizáveis do **Ionic** para construir uma interface moderna e responsiva.

### Funcionalidades

- **Cadastro e Edição de Eventos**: Usuários autenticados podem criar e editar eventos, incluindo descrição, data e localização.
- **Gerenciamento de Inscrições**: Os participantes podem se inscrever em eventos e os administradores têm o controle dessas inscrições.
- **Perfis de Usuário e Administrador**: A aplicação diferencia funcionalidades entre usuários comuns e administradores, permitindo controle mais abrangente para administradores.
- **Notificações por Email**: Implementadas de forma assíncrona com **RabbitMQ** para comunicações automatizadas.

### Como Executar o Projeto

1. **Clonar o Repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. **Backend**
    - Navegue até o diretório do backend e execute o projeto com o Maven ou IntelliJ IDEA.
    - Certifique-se de configurar o banco de dados PostgreSQL e Liquibase conforme as instruções do arquivo `application.properties`.

3. **Frontend**
    - Navegue até o diretório do frontend e execute:
   ```bash
   ionic serve
   ```

### Tecnologias Utilizadas

- **Backend**: Java, Spring Boot, Spring Data JPA, Liquibase, RabbitMQ, PostgreSQL
- **Frontend**: Ionic, TypeScript, HTML, CSS

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções de bugs ou novas funcionalidades.

### Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---
Espero que essa nova estrutura do README tenha tornado as informações mais claras e organizadas. Caso precise de mais algum ajuste ou queira adicionar mais detalhes, é só me avisar! 😊

