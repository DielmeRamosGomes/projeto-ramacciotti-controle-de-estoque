create database loja_online;

create table loja_online.vendedores(
    id_vendedor int primary key,
    nome varchar(100),
    data_cadastro date,
    email varchar(100) unique,
    ativo boolean

);

create table loja_online.usuarios(
    id_usuario int primary key,
    nome varchar(100),
    data_cadastro date,
    email varchar(100) unique,
    senha varchar(100) unique,
    ativo boolean

);

create table loja_online.produtos (
    id_produto int primary key,
    nome varchar(100),
    descrição varchar(100),
    id_vendedor int not null,
    data_cadastro date,
    preco_unitario decimal (10,2) not null,
    ativo boolean,
    foreign key (id_vendedor) references vendedores (id_vendedor)

);

select * from loja_online.produtos;
select * from loja_online.vendedores;
select * from loja_online.usuarios;