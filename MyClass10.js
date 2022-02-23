const EventEmitter = require('events')
const fs = require('fs');

class MyClass10 extends EventEmitter{
    constructor(){
        super()
        this.onListen()
    }
    onListen(){
        this.on('listen',(nameFile,data)=>{
            fs.writeFile(nameFile,data,(err,result)=>{
                if(err) throw err
            })
        })
    }
    onEmit(nameFile,data){
        this.emit('listen',nameFile,data)
    }
}
module.exports = new MyClass10();