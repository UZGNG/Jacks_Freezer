const daoCommon = require('./common/dao-common')

const iceCreamDao = {
    ...daoCommon,
    ...require('./api/ice-cream-dao')
}
const userDao = {
    ...daoCommon,
    ...require('./api/user-dao')
}

module.exports={
    iceCreamDao,
    userDao
}