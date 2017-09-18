module.exports = {

  var commands = {
    ls: function(file, done) {
      var output = '';
      fs.readdir('.', function(err, files) {
        files.forEach(function(file) {
          output += file.toString() + '\n';
        })
        done(output);
      });
    },
  pwd: function(){ //pwd command

    var exec = require('child_process').exec;
    var child;

    child = exec("pwd", function(err, stdout, stderr){
      process.stdout.write('stdout: ' + stdout);
      process.stdout.write('stderr: ' + stderr);
      if(err){
        process.stderr.write('exec err: ' + err);
      }
    })
  }

}


};

var done = function(output){

    process.stdout.write(output);
    process.stdout.write('prompt >');
  }
