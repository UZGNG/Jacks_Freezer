const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
    res.json({
        'All Stock': `http://localhost:${PORT}/api/stock`,
    })
})

router.use('/api/stock', require('./api/stockRoutes'))
router.get('/', (req,res)=>{
    res.json({
        'All contact':`https://localhost:${PORT}/api/user`
    })
})

router.use('/api/user', require('./api/user-route'))

router.get('*',(req,res)=>{
    if(req.url=='/favicon.ico/'){
        res.end()
    }else{
        res.send('<h1> Page does not exist.<h1>')
    }
})

module.exports = router;