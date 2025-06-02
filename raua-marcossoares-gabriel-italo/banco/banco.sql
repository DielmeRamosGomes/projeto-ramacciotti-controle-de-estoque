create database loja_online;

create table loja_online.produtos (
    id_produto int primary key,
    nome varchar(100),
    descrição varchar(100),
    id_vendedor int not null 
);