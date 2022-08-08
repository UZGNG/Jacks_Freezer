const con = require('../../config/dbconfig.js')

const daoCommon = {
    findAll: (res, table, id)=>{
        con.execute(
            `SELECT * FROM ${table}`,
            (error, rows)=> {
                if(!error){
                    if(rows.length===1){
                        res.json(...rows)
                    }else{
                        res.json(rows)
                        }
                    }else{
                    console.log('Dao Error', error)
                    }
                }
        )
    },

    findById:(res, table, id)=> {
        con.query(
            `SELECT * FROM ${table} WHERE ${table}_id=?`,[id],
            (error, rows)=> {
                if(!error){
                    if(rows.length===1){
                        res.json(...rows)
                    }else{
                        res.json(rows)
                        }
                    }else{
                    console.log('Error', error)
                    }
                }
        )
            }
        }
    module.exports = daoCommon