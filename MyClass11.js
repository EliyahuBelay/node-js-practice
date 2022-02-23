const EventEmitter = require('events')
const fs = require('fs');

class MyClass11 extends EventEmitter{
    constructor(){
        super()
        this.onListen()
    }
    onListen(){
        this.on('listen',(array)=>{
            fs.writeFile('./myFile.json',JSON.stringify(array),(err,result)=>{
                if(err) throw err
            })
        })
    }
    onEmit(array){
        this.emit('listen',array)
    }
}
module.exports = new MyClass11();