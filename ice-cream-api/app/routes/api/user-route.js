const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/user-dao')

router.get('/', (req, res)=>{
    console.log(dao)
    dao.findAll(res, dao.table)
})
router.get('/count', (req, res)=>{
    dao.countAll(res, dao.table)
})
router.get('/sort', (req, res)=>{
    dao.sort(req, res)
})
router.get('/:id', (req, res)=>{
    dao.findById(res, 'user', req.params.id)
})
router.post('/create', (req, res)=>{
    dao.create(req, res)
})
router.patch('/update/:id', (req, res)=>{
    dao.update(req, res)
})

module.exports = router





