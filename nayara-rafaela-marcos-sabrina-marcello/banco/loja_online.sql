Create database loja_online;

ALTER USER 'root'@'localhost' IDENTIFIED BY'';
SELECT Host, USER FROM mysql.user WHERE USER = 'root';

USE mysql;
UPDATE user SET authentication_string = PASSWORD('') WHERE User = 'root' AND Host = 'localhost';
FLUSH PRIVILEGES;

CREATE TABLE loja_online.Vendedor (
    id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_cadastro date,
    email VARCHAR(100) NOT NULL UNIQUE,
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE loja_online.Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_cadastro DATE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE loja_online.Produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    id_vendedor INT,
    data_cadastro DATE,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_vendedor) REFERENCES Vendedor(id_vendedor)
);

select * from loja_online.Produto;

