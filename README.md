# Sensi Marketplace Admin

Aplicação web responsável pela gestão de dados do Marketplace Sensi
Esta aplicação pode ser configurada para múltiplos clientes Sensi, que chamamos aqui de Tenant.

Os Tenants disponíveis atualmente são:
* Buriti: *Shopping Buriti* em Goiânia
* Oferta: aplicativo *Oferta play*
* Sandbox: ambiente *Sandbox* para testes da *Sensi*

## Para desenvolver:

1. Instale as dependências
```bash
npm install
```
2. Configure com tenant:
```bash
npm run config:sandbox
```
3. Inicie em modo debug:
```bash
npm start
```

## Para mudar o Tenant:

Simplismente execute o config do Tenant. Veja um exemplo com Oferta Play:

```bash
npm run config:oferta
```

## Para testar:

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>
<p align="center">
  <a href="https://docs.cypress.io/api/api/table-of-contents.html">Documentação</a>
</p>

<h3 align="center">
  A web evoluiu. Finalmente, o teste também.
</h3>

<p align="center">
  Teste rápido, fácil e confiável para qualquer coisa executada em um navegador.
</p>


1. Para abrir o dashboad dos testes
```bash
npm run cy
```
2. Ou execute o teste em linha de comando
```bash
npm run cyrun
```
![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)
