const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://cgslbvje:d3fOv_0mAJMWXqbcdt4-4p6vws_bF1v7@silly.db.elephantsql.com/cgslbvje'
    });              //link elephante(banco)

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
