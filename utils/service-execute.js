var fs = require('fs'),
spawn = require('child_process').spawn,
out = fs.openSync("./logs/soeasy-service.log", 'a'),
err = fs.openSync("./logs/soeasy-service.log", 'a');
var exec = require('child_process').exec;

child = spawn("python3", ["soeasy-service/main.py"],{
				stdio: [ 'ignore', out, err, 'pipe' ] // piping stdout and stderr to out.log
			});
			
child.on("error", e => console.log("p2 error:", e));
child.on("exit", (code, signal) => 
    console.log("child exit")
);