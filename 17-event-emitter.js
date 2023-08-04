const EventEmitter = require('events');

const customEmitter = new EventEmitter()
//first the emitter should be 'on' and only then 'emit'
customEmitter.on('response', (name, id) =>
{
    console.log(`data received from ${name} with id ${id}`)
})
//we could have multiple actions upon a single emitter
customEmitter.on('response', ()=>{
    console.log('some new logic here')
})
//'emit' part of the code, parameters match the one in emitter 'on' part
customEmitter.emit('response', 'john', 34)

