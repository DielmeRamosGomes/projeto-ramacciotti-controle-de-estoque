const Usuario = require('../models/usuario');

// Função para cadastrar um novo usuário
exports.cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const novoUsuario = new Usuario({ nome, email, senha, data_cadastro: new Date(), ativo: true });
        await novoUsuario.save();
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: novoUsuario });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
    }
};

// Função para fazer login do usuário
exports.loginUsuario = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ email, senha });
        if (!usuario) {
            return res.status(401).json({ message: 'Email ou senha inválidos' });
        }
        res.status(200).json({ message: 'Login realizado com sucesso!', usuario });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login', error });
    }
};

// Função para listar todos os usuários
exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar usuários', error });
    }
};

// Função para listar um usuário específico pelo id
exports.listarUsuarioPorId = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
};

// Função para marcar um usuário como inativo
exports.marcarUsuarioInativo = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, { ativo: false }, { new: true });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário marcado como inativo', usuario });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao marcar usuário como inativo', error });
    }
};