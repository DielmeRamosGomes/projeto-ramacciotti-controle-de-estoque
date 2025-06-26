import {useState,useEffect} from 'react';
export default function App() {
  const [f,setF]=useState({}); const [p,setP]=useState([]); const [v,setV]=useState([]);
  const h=e=>setF({...f,[e.target.name]:e.target.value});
  const post=(url)=>fetch('http://localhost:3001'+url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(f)});
  const patch=(url)=>fetch('http://localhost:3001'+url,{method:'PATCH'});
  const put=(url)=>fetch('http://localhost:3001'+url,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(f)});
  useEffect(()=>{fetch('http://localhost:3001/produtos').then(r=>r.json()).then(setP);fetch('http://localhost:3001/vendedores').then(r=>r.json()).then(setV);},[]);

  return <div>
    <h3>Usuário</h3>
    <input name="nome" onChange={h} placeholder="nome"/>
    <input name="email" onChange={h} placeholder="email"/>
    <input name="senha" onChange={h} placeholder="senha"/>
    <button onClick={()=>post('/usuarios')}>Cadastrar</button>
    <button onClick={()=>post('/login')}>Login</button>

    <h3>Vendedor</h3>
    <input name="nome" onChange={h} placeholder="nome"/>
    <input name="email" onChange={h} placeholder="email"/>
    <button onClick={()=>post('/vendedores')}>Cadastrar</button>

    <h3>Produto</h3>
    <input name="nome" onChange={h} placeholder="nome"/>
    <input name="descricao" onChange={h} placeholder="descrição"/>
    <input name="id_vendedor" onChange={h} placeholder="id_vendedor"/>
    <input name="preco_unitario" onChange={h} placeholder="preço"/>
    <button onClick={()=>post('/produtos')}>Cadastrar</button>
    <button onClick={()=>put('/produtos/'+f.id)}>Atualizar</button>

    <h3>Listas</h3>
    <ul>{p.map(p=><li key={p.id_produto}>{p.nome} - R${p.preco_unitario} ({p.ativo?'Ativo':'Inativo'})</li>)}</ul>
    <ul>{v.map(v=><li key={v.id_vendedor}>{v.nome} ({v.ativo?'Ativo':'Inativo'})</li>)}</ul>
  </div>
}
