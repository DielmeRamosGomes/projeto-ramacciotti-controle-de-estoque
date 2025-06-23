class ProductModel {
    constructor(connection) {
        this.connection = connection;
    }

    async createProduct(productData) {
        const query = 'INSERT INTO produtos (nome, descrição, id_vendedor, data_cadastro, preco_unitario, ativo) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await this.connection.execute(query, [
            productData.nome,
            productData.descrição,
            productData.id_vendedor,
            productData.data_cadastro,
            productData.preco_unitario,
            productData.ativo
        ]);
        return result.insertId;
    }

    async updateProduct(id_produto, productData) {
        const query = 'UPDATE produtos SET nome = ?, descrição = ?, id_vendedor = ?, data_cadastro = ?, preco_unitario = ?, ativo = ? WHERE id_produto = ?';
        await this.connection.execute(query, [
            productData.nome,
            productData.descrição,
            productData.id_vendedor,
            productData.data_cadastro,
            productData.preco_unitario,
            productData.ativo,
            id_produto
        ]);
    }

    async getProductById(id_produto) {
        const query = 'SELECT * FROM produtos WHERE id_produto = ?';
        const [rows] = await this.connection.execute(query, [id_produto]);
        return rows[0];
    }

    async getAllProducts() {
        const query = 'SELECT * FROM produtos';
        const [rows] = await this.connection.execute(query);
        return rows;
    }

    async markProductInactive(id_produto) {
        const query = 'UPDATE produtos SET ativo = ? WHERE id_produto = ?';
        await this.connection.execute(query, [false, id_produto]);
    }

    async getProductsByVendor(id_vendedor) {
        const query = 'SELECT * FROM produtos WHERE id_vendedor = ?';
        const [rows] = await this.connection.execute(query, [id_vendedor]);
        return rows;
    }
}

module.exports = ProductModel;