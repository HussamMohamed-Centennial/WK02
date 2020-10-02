const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! , Sam');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

class Car {
  constructor(door,engin,color) {
    this.door = door;
    this.engine = engin;
    this.color = color;
  }

  carStats(){
    return `this car has ${this.door} door ,  and ${this.engine} engine , and  ${this.color} color` ;
  }

}

const cx5 = new Car(4,`V6` ,`black`);
console.log(cx5);
console.log(cx5.carStats());