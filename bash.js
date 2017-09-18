// const readline = require('readline');
 const fs = require('fs');
 const exec = require('child_process').exec;

var commands = require('./commands');
// var userCommand = 'pwd';
// commands[userCommand]();

process.stdout.write('prompt > ');
//process.stdout.write('argv: '  + process.argv);

process.stdin.on('data', function(inData){
  var cmd = inData.toString().trim();
  var cmdList = cmdString.split(/\s*\|\s*/g)

  commands[cmd]();

})



// function sh(cmd) {
//   return new Promise(function (resolve, reject) {
//     exec(cmd, (err, stdout, stderr) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve({ stdout, stderr });
//       }
//     });
//   });
// }

// console.log(" hi");
// console.log(process);
// console.log('++++++\n');
// console.log(Object.keys(process));

// const url =  readline.createInterface({
//   input: process.stdin,
//   out: process.stdou
// })


// rl.on('line', line=> {
//   fs.readFile(line, (err,data)=>{
//     if(err){

//     }
//   })

//   process.stdout.write(fs.accessSync)
// })
// process.stdout.write('hi again');
