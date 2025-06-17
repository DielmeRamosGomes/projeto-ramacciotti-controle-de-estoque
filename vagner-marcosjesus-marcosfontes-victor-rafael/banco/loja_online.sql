create database loja_online;

create table loja_online.usuarios(
    id_usuario int auto_increment primary key,
    nome varchar(100) not null,
    data_cadastro date not null,
    email varchar(100) unique not null,
    senha varchar(100) unique not null,
    ativo boolean not null
);


create table loja_online.vendedor(
    id_vendedor int auto_increment primary key,
    nome varchar(100) not null,
    data_cadastro date not null,
    email varchar(100) unique not null,
    ativo boolean not null
);

create table loja_online.produtos(
    id_produto int auto_increment primary key,
    nome varchar(100) not null,
    descrição varchar(100) not null,
    id_vendedor int not null,
    data_cadastro date not null,
    preco_unitario decimal(5, 2) not null, 
    ativo boolean not null
);

