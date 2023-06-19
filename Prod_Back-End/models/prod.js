const db = require("../db");

class Prod {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM prods"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  
  static async selectOne(id) {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM prods WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      console.log("teste")
      const connect = await db.connect();
      const sql = 'INSERT INTO prods(titulo, dataCadastro, preco, descricao, imagem) VALUES ($1, $2, $3, $4, $5) RETURNING id, titulo, dataCadastro, preco, descricao, imagem;';
      const values = [data.titulo, data.dataCadastro, data.preco, data.descricao, data.imagem];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = 'UPDATE produtos SET titulo=$1, data_cadastro=$2, preco=$3, descricao=$4, imagem=$5 WHERE id=$6 RETURNING id, titulo, data_cadastro, preco, descricao, imagem;';;
      const values = [data.titulo, data.dataCadastro, data.preco, data.descricao, data.imagem, id];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM prods WHERE id=$1";
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Prod;
