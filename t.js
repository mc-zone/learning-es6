var os = require('os');

var cpu = os.cpus();

console.log( JSON.stringify(cpu) );
