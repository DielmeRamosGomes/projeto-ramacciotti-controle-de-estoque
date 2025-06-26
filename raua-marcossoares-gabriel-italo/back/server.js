const e = require('express');
const m = require('mysql2/promise');
const app = e(); app.use(e.json());

const db = m.createPool({host:'localhost',user:'root',password:'',database:'loja_online'});
const q = (s,p=[]) => db.execute(s,p).then(r=>r[0]);

// USUÁRIOS
app.post('/usuarios',   (r,s)=>q('INSERT INTO usuarios(nome,data_cadastro,email,senha,ativo) VALUES(?,CURDATE(),?,?,1)',[r.body.nome,r.body.email,r.body.senha]).then(()=>s.send('ok')));
app.post('/login',      (r,s)=>q('SELECT * FROM usuarios WHERE email=? AND senha=? AND ativo=1',[r.body.email,r.body.senha]).then(u=>s.json(u[0]||{})));

// VENDEDORES
app.post('/vendedores', (r,s)=>q('INSERT INTO vendedores(nome,data_cadastro,email,ativo) VALUES(?,CURDATE(),?,1)',[r.body.nome,r.body.email]).then(()=>s.send('ok')));
app.get('/vendedores',        (r,s)=>q('SELECT * FROM vendedores').then(d=>s.json(d)));
app.get('/vendedores/:id',    (r,s)=>q('SELECT * FROM vendedores WHERE id_vendedor=?',[r.params.id]).then(d=>s.json(d[0]||{})));
app.patch('/vendedores/:id/inativo',(r,s)=>q('UPDATE vendedores SET ativo=0 WHERE id_vendedor=?',[r.params.id]).then(()=>s.send('ok')));

// PRODUTOS
app.post('/produtos',   (r,s)=>q('INSERT INTO produtos(nome,descrição,id_vendedor,data_cadastro,preco_unitario,ativo) VALUES(?,?,?,?,?,1)',[r.body.nome,r.body.descricao,r.body.id_vendedor,r.body.preco_unitario]).then(()=>s.send('ok')));
app.put('/produtos/:id',(r,s)=>q('UPDATE produtos SET nome=?,descrição=?,preco_unitario=? WHERE id_produto=?',[r.body.nome,r.body.descricao,r.body.preco_unitario,r.params.id]).then(()=>s.send('ok')));
app.get('/produtos',         (r,s)=>q('SELECT * FROM produtos').then(d=>s.json(d)));
app.get('/produtos/:id',     (r,s)=>q('SELECT * FROM produtos WHERE id_produto=?',[r.params.id]).then(d=>s.json(d[0]||{})));
app.patch('/produtos/:id/inativo',(r,s)=>q('UPDATE produtos SET ativo=0 WHERE id_produto=?',[r.params.id]).then(()=>s.send('ok')));
app.get('/produtos/data/:data',   (r,s)=>q('SELECT * FROM produtos WHERE data_cadastro=?',[r.params.data]).then(d=>s.json(d)));
app.get('/produtos/vendedor/:id', (r,s)=>q('SELECT * FROM produtos WHERE id_vendedor=?',[r.params.id]).then(d=>s.json(d)));

app.listen(3001,()=>console.log('Servidor rodando http://localhost:3001'));
