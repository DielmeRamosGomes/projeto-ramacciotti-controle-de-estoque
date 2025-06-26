import React, { useEffect, useState } from 'react';
import UsuarioForm from '../components/UsuarioForm';
import { getUsuarios, marcarUsuarioInativo } from '../services/usuarioService';

const UsuariosPage = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const data = await getUsuarios();
            setUsuarios(data);
        };

        fetchUsuarios();
    }, []);

    const handleInativar = async (id) => {
        await marcarUsuarioInativo(id);
        setUsuarios(usuarios.filter(usuario => usuario.id_usuario !== id));
    };

    return (
        <div>
            <h1>Usuários</h1>
            <UsuarioForm />
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id_usuario}>
                        {usuario.nome} - {usuario.Email}
                        <button onClick={() => handleInativar(usuario.id_usuario)}>Inativar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsuariosPage;