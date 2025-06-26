[11:23] Rafaela Oliveira Silva
import React, { useState } from 'react';

export default function Funcionalidades() {

  const [usuario, setUsuario] = useState({ nome: '', email: '', senha: '' });

  const [produto, setProduto] = useState({ nome: '', descricao: '' });

  const [dataCadastro, setDataCadastro] = useState('');

  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  function cadastrarUsuario() {

    fetch("http://localhost:3000/usuarios", {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(usuario)

    })

    .then(res => res.json())

    .then(data => alert("Usuário cadastrado!"))

    .catch(err => console.error("Erro:", err));

  }

  function cadastrarProduto() {

    fetch("http://localhost:3000/produtos", {

      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(produto)

    })

    .then(res => res.json())

    .then(data => alert("Produto cadastrado!"))

    .catch(err => console.error("Erro:", err));

  }

  function listarProdutosPorData() {

    fetch(`http://localhost:3000/produtos?data=${dataCadastro}`)

    .then(res => res.json())

    .then(data => setProdutosFiltrados(data))

    .catch(err => console.error("Erro:", err));

  }

  function inativarVendedor(id) {

    fetch(`http://localhost:3000/vendedores/${id}/inativar`, {

      method: "PUT"

    })

    .then(res => res.json())

    .then(data => alert("Vendedor inativado!"))

    .catch(err => console.error("Erro:", err));

  }

  return (

    <div style={{ padding: 20 }}>

      <h2>Cadastro de Usuário</h2>

      <input placeholder="Nome" onChange={e => setUsuario({ ...usuario, nome: e.target.value })} />

      <input placeholder="Email" onChange={e => setUsuario({ ...usuario, email: e.target.value })} />

      <input placeholder="Senha" type="password" onChange={e => setUsuario({ ...usuario, senha: e.target.value })} />

      <button onClick={cadastrarUsuario}>Cadastrar Usuário</button>

      <h2>Cadastro de Produto</h2>

      <input placeholder="Nome do Produto" onChange={e => setProduto({ ...produto, nome: e.target.value })} />

      <input placeholder="Descrição" onChange={e => setProduto({ ...produto, descricao: e.target.value })} />

      <button onClick={cadastrarProduto}>Cadastrar Produto</button>

      <h2>Filtrar Produtos por Data</h2>

      <input type="date" onChange={e => setDataCadastro(e.target.value)} />

      <button onClick={listarProdutosPorData}>Buscar Produtos</button>

      <ul>

        {produtosFiltrados.map(p => (

          <li key={p.id}>{p.nome} - {p.dataCadastro}</li>

        ))}

      </ul>

      <h2>Inativar Vendedor</h2>

      <input placeholder="ID do Vendedor" onBlur={e => inativarVendedor(e.target.value)} />

    </div>

  );

}
