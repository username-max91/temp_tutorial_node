const os = require('os')

// user info
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log(`system uptime is ${os.uptime()}`)

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)