# My Control
My control é uma aplicação para gerenciameto financeiro pessoal, a ideia surgiu para diminuir o tempo que perco escrevendo minhas despesas, gastos e investimento.
&nbsp;

A aplicação utiliza pwa, tornando assim possivel a instalação no smartphone.
&nbsp;

Atualmente a aplicação está com alguns bugs, nos quais estou trabalhando em uma solução.

## About Design
Iniciamente me inspirei no banco Inter e na Nubanck para desenvolver a interface gráfica.
![Page Home](https://user-images.githubusercontent.com/54229396/129455211-4152d07d-1e69-47d1-b70c-42c834b9d1c8.png)
![Page Home - Moblie](https://user-images.githubusercontent.com/54229396/129455203-3193e8f6-8f76-437e-a5fe-9ee4fdf7e9a6.png)

Todo o desing foi pessando para funcionar bem no smartphone e no desktop.

## About the functioning
A aplicação consome dados da [apifinance](https://github.com/NBO2001/apifinance), a api é responsável por guardar as informações em um banco de dados sqlite.
&nbsp;

Atualmente a aplicação guarda a informação dentro de uma store, e todo o sistema consome dessa store.

## Lighthouse
Testendo a página na chrome com a ferramento Lighthouse obtive os seguintes resultados.

Moblie:
&nbsp;

![Lighhouse - home - moblie](https://user-images.githubusercontent.com/54229396/129455420-eadf41b7-b155-487e-b44d-5633bff74097.png)

Desktop:
&nbsp;

![Lighhouse - home](https://user-images.githubusercontent.com/54229396/129455425-4788898e-e387-4f8e-94cf-7d4a65b5da11.png)

## Installation
O gerenciador de dependência utilizado foi o NPM.
&nbsp;

Para instalar é só rodar o `npm install`.
&nbsp;

As configurações da api fica em src/config.

## Social Media
* [Linkedin](www.linkedin.com/in/natanael-bezerra)



