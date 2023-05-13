import {sql, client } from '../Database/bdd.js';

export function inseruser(req, res, next){
    try {
        client.request()
            .input('correo', sql.VarChar,req.body.correo)
            .input('contraseña',sql.VarChar, req.body.contra)
            .execute('insertUser')
    } catch (error) {
        
    }
}