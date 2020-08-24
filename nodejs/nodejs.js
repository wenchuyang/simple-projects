#!/usr/bin/env node

var fs = require('fs');
dirName = process.argv[2] // 你传的参数是从第 2 个开始的
if (fs.existsSync(dirName)) {
    // Do something
	console.log("The file is already exist");
	process.exit(1);
}
	//process.chdir('F:\\wcy\\local\\') // cd /f/wcy/local
	fs.mkdirSync("./" + dirName) // mkdir $1
	process.chdir("./" + dirName) // cd $1
	fs.mkdirSync('css') // mkdir css
	fs.mkdirSync('js') // mkdir js
	fs.writeFileSync("./index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>")
	fs.writeFileSync("css/style.css", "h1{color: red;}")
	fs.writeFileSync("./js/main.js", "var string = 'Hello World' alert(string)")
	process.exit(0)




