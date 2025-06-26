Create database loja_online;

-- Conecte-se ao MySQL como root (se conseguir por outros meios ou após redefinição)
-- AVISO: Isso é INSEGURO para produção.
ALTER USER 'root'@'localhost' IDENTIFIED BY '1234' AND PLUGIN 'mysql_native_password';
-- Ou para versões mais antigas:
UPDATE mysql.user SET authentication_string='', plugin='mysql_native_password' WHERE User='root' AND Host='localhost';
FLUSH PRIVILEGES;

CREATE TABLE loja_online.Vendedor (
    id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_cadastro date,
    email VARCHAR(100) NOT NULL UNIQUE,
    ativo BOOLEAN DEFAULT TRUE
);

insert into loja_online.Vendedor(nome, data_cadastro, email, ativo) 
    values("Carlos", "2025-06-25", "carlos@exemplo.com", TRUE);

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

