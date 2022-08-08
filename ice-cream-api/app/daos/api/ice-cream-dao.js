const con = require('../../config/dbconfig')

const daoCommon = require('../common/dao-common')

const stockDao = {
    ...daoCommon,
    table: 'stock',

    findById: (res, table, id)=>{
        con.query(
            `SELECT * FROM ${table} WHERE id=${id}`,
            (error, rows)=> {
                if(!error){
                    if(rows.length===1){
                        res.json(...rows)
                    }else{
                        res.json(rows)
                        }
                    }else{
                    console.log(`Dao Error, ${error}`)
                    }
                }
        )
    },
    
    create: (req, res) => {
        con.query(
            `INSERT INTO ${this.table} SET ?`,
            req.body,
            (error, dbres)=>{
                if(!error){
                    res.send(`Last id: ${dbres.insertId}`)
                } else{
                    console.log(' DAO Error', error)
                    res.send('Error creating record')
                }
            }
        )
    },

    update: (req, res)=>{
        con.query('UPDATE stock SET name =?, WHERE stock_id = ?', [req.body.name, req.body.stock_id],
        (error, dbres)=>{
            if(!error){
                res.send(`changed ${dbres.changedRows} row(s)`)
            } else{
                console.log(' DAO Error', error)
                res.send('Error updating record')
            }
        })
    }
}

module.exports = stockDao