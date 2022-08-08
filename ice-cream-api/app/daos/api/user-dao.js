const con = require('../../config/dbconfig')

const daoCommon = require('../common/dao-common')

const userDao = {
    ...daoCommon,
    table: 'user',

    findbyid: (res, table, id)=>{
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
                    console.log('Error', error)
                    }
                }
        )
    },
    
    create: (req, res) => {
        con.query(
            `INSERT INTO user SET ?`,
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
        con.query('UPDATE user SET email =?, password, WHERE user_id = ?', [req.body.email_name, req.body.password_name, req.body.user_id],
        (error, dbres)=>{
            if(!error){
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else{
                console.log(' DAO Error', error)
                res.send('Error updating record')
            }
        })
    }
}

module.exports = userDao