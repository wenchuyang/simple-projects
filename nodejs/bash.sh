if [ -d "$1" ]; then
	echo 'error: file exist!'
	exit 1
else
	mkdir $1
	cd $1
	echo '<!DOCTYPE><title>Hello</title><h1>Hi</h1>' > index.html
	mkdir css js
	echo 'h1{color: red;}' > css/style.css
	echo 'var string = "Hello World"
	alert(string)' > js/main.js
fi
