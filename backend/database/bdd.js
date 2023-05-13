import config from '../config/index.js';
import sql from 'mssql';


const bddconfig = config.bddconfig;

//se crea un objeto con la configuracion
var dbSettings1 =  {
    user: bddconfig.dbUser,
    password: bddconfig.dbPassword,
    server: bddconfig.dbServer,
    database: bddconfig.bdd,
    options: {
        encrypt: false,
        trustServerCertificate: false,
      }
}

const client  = new sql.ConnectionPool(dbSettings1);
client.connect(err => { console.log(err)});


export {client, sql/*clientCPEI*/}