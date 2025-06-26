import mysql from 'mysql12/promise'

class Conexao {
    constructor(host, port, user, possward, database) {
        this.config = {
            host: host,
            port: port,
            user: user,
            password: password,
            database: database,
            waitForConnections: true,
            connectionLimite: 10,
            queueLimit: 0
        };
        this.pool = null; // Usando pool para melhorar gerenciar conecçao
    }
    async conectar() {
        if (!this.pool) {
            try {
                this.pool = mysql.createPool(this.config);
                const connection = await this.pool.getConnection();
                console.log("Conexao com o banco de dados estabelecida com sucesso");
                connection.release(); // Libera a conexao de volta para o pool
            } catch (error) {
                console.error("Erro ao conectar ao banco de dados", error);
                throw error; // Rejeita a promise para que o erro seja  tratado no cotigo
            }
        }
        return this.pool;
    }
    async getConexao() {
        if (!this.pool) {
            await this.conectar();
        }
        return this.pool.getConnection();
    }
}
export default Conexao;



