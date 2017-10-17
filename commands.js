var fs = require('fs');
var request = require('request');

module.exports = commands = {
	date: function(pipeIn, myArgs){
		var output = Date();
		done(output);
	},
	pwd: function(pipeIn, myArgs){
		var output = process.cwd() + '\n';
		done(output);

	},
	ls: function(pipeIn, myArgs){
		var output='';
		fs.readdir('.', function(err, files){
			if(err) throw err;
			files.forEach(function(f){
				output += f.toString()+ '\n';
			});
			done(output);
		})
	},
	echo: function(pipeIn, myArgs){
		done(myArgs);
	},
	cat: function(pipeIn, myArgs, done){
		fs.readFile(myArgs,"utf8",function(err, data) {
			if (err) throw err;
			done(data);
		});
	},
	head: function(pipeIn, myArgs, done){
		fs.readFile(myArgs, "utf8", function(err, data){
			if(err) throw err;
			var lines = data.split('\n');
			done(lines.slice(0, 5).join('\n'));
		});
	},
	tail: function(pipeIn, myArgs){
		fs.readFile(myArgs, "utf8", function(err, data){
			if(err) throw err;
			var lines = data.split('\n');
			done(lines.slice(-5).join('\n'));
		});
	},
	sort: function(pipeIn, myArgs){
		fs.readFile(myArgs, "utf8", function(err, data){
			if(err) throw err;
			var lines = data.split('\n');
			lines.sort();
			done(lines.slice(0).join('\n'));
		});
	},
	wc: function(pipeIn, myArgs){
		fs.readFile(myArgs, "utf8", function(err, data){
			if(err) throw err;
			var words = data.split(/[\s\n]+/);
			done(words.length);
		});
	},
	curl: function(pipeIn, myArgs){
		request(myArgs, function(err, response, body){
			if(err) throw err;
			done(body);
		});
	}
// add find with recurrsive
};

var done = function(output){
	process.stdout.write(output +'\n');
	process.stdout.write("prompt > ");
}
