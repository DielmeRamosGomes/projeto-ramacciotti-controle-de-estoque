Create database loja_online;

Create table produtos(
    id_produto int primary key,
    nome varchar (100),
    descricao varchar (100),
    id_vendedor int,
    data_cadastro date,
    preço_unitario decimal (10,2),
      foreign key (id_vendedor) references Vendendor (id_vendedor)
);