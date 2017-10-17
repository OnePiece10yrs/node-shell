var commands = require('./commands');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

// eventEmitter related to stdin.On doc source:
//https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
//args: (eventName, callBack)

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  //parse input into arrays, org
  var opt = cmd.split(' ')[1];
  cmd = cmd.split(' ')[0];
  var input = '';

  //for piping
  // var cmdString = data.toString().trim();
  // var cmdList = cmdString.split(/\s*\|\s*/g);
  // process.stdout.write("cmdList = " + cmdList);


  process.stdout.write('You typed: ' + cmd + '\n');



  //test case: number of commands entered
  // process argv holds all input in array. check argv.length will return
  // num of command entered
  //process.stdout.write("num of args=" + process.argv.length);

commands[cmd](input, opt);

  //process.stdout.write(commands(cmd));
  // process.stdout.write('test');
  // process.stdout.write(process.stdout.read());
  // commands[cmd]();
});
