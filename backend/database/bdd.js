import config from '../config/index.js';
import sql from 'mssql';


const bddcptconfig = config.bddcptconfig;

//se crea un objeto con la configuracion
var dbSettings1 =  {
    user: bddcptconfig.dbUser,
    password: bddcptconfig.dbPassword,
    server: bddcptconfig.dbServer,
    database: bddcptconfig.bdd,
    options: {
        encrypt: false,
        trustServerCertificate: false,
      }
}

const client  = new sql.ConnectionPool(dbSettings1);
clientP.connect(err => { console.log(err)});


export {client, sql/*clientCPEI*/}