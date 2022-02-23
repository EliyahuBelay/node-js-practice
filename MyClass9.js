const EventEmitter = require('events')
const fs = require('fs');

class MyClass9 extends EventEmitter{
    constructor(){
        super()
        this.onListen()
    }
    onListen(){
        this.on('listen',(nameFile)=>{
            fs.writeFile(nameFile,"i am listening",(err,result)=>{
                if(err) throw err
            })
        })
    }
    onEmit(nameFile){
        this.emit('listen',nameFile)
    }
}
module.exports = new MyClass9();