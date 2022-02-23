const fs = require('fs')

//question 2
const NonEvenNums = () => {
    for (let i = 0; i < 10; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
// NonEvenNums();

//questio 3
const EvenNumbers = () => {
    let array = [];
    for (let i = 0; i < 16; i++) {
        array.push(Math.floor(Math.random() * 11));
        if (array[array.length - 1] % 2 == 0) {
            console.log(array[array.length - 1]);
        }
    }
}
// EvenNumbers();

//question 4
const RightToJsonFile = () => {
    const obj = { name: "eliyahu", age: 25, isInGarden: false };
    fs.writeFile('./jsonFile.json', JSON.stringify(obj), (err, result) => {
        if (err) throw err
    })
}
// RightToJsonFile();

//question 5
const WriteNReadFile = () => {
    let array = [
        { name: "eliyahu", age: 25, isInGarden: false },
        { name: "eli", age: 25, isInGarden: true },
        { name: "beli", age: 25, isInGarden: false },
        { name: "bom", age: 25, isInGarden: true },
        { name: "klat", age: 25, isInGarden: true }
    ];
    let ff = []
    array.forEach(element => {
        ff.push(element.toString())
    });
    console.log(ff);
    // let someData = array.forEach((item)=>JSON.stringify(item))
    // console.log(someData);
    fs.writeFileSync('./myFile.txt', ff[0].name.toString(), (err, result) => {
        if (err) log("some problem");




    })
}
// WriteNReadFile();not succeed

//question 6
const WriteNReadJsonFile = () => {
    let array = [
        { name: "eliyahu", age: 25, isInGarden: false },
        { name: "eli", age: 25, isInGarden: true },
        { name: "beli", age: 25, isInGarden: false },
        { name: "bom", age: 25, isInGarden: true },
        { name: "klat", age: 25, isInGarden: true }
    ];
    let ff = [];
    ff = array.forEach((item) => JSON.stringify(item))
    console.log(ff[0]);
    // fs.writeFileSync('./anotherJsonFile.json',array.forEach((item)=>JSON.stringify(item)),(err,result)=>{
    // if (err) throw err
    // })
}
// WriteNReadJsonFile();not succeed

//question 7
const WriteNReadArrayToFile = () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * 101);
        if (num % 7 == 0) {
            array.push(num)
        }
    }
    fs.writeFile('./myText.txt', array.toString(), (err, result) => {
        if (err) throw err
    })
    fs.readFile('./myText.txt', (err, request) => {
        if (err) throw err
        let array = request.toString().split(",");
        array.forEach((item) => {
            if (item > 50) {
                console.log(item);
            }
        })
    })
}
// WriteNReadArrayToFile();

//question 8
const WriteNReadArrayToJsonFile = () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * 101);
        if (num % 7 == 0) {
            array.push(num)
        }
    }
    fs.writeFile('./myText.json', JSON.stringify(array), (err, result) => {
        if (err) throw err
    })
    fs.readFile('./myText.json', (err, request) => {
        if (err) throw err
        let array2 = JSON.parse(request);
        array2.forEach((request) => {
            if (request > 50) {
                console.log(request);
            }
        })
    })
}
// WriteNReadArrayToJsonFile();


////////////////////////////////////////////////////////////////////////

const myClass9 = require('./MyClass9');

// myClass9.onEmit('./myFile.txt');

////////////////////////////////////////////////////////////////////////

const myClass10 = require('./MyClass10');

// myClass10.onEmit('./myFile.txt',"new i am listening");

//////////////////////////////////////////////////////////////////////////

const myClass11 = require('./MyClass11');

// myClass11.onEmit(["eli","beli","bom"]);

///////////////////////////////////////////////////////////////////////


