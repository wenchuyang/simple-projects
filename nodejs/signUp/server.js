var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号\n 比如：node server.js 8888 ')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ''
  if (path.indexOf('?') >= 0) {
    query = path.substring(path.indexOf('?'))
  }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  if (path === "/") {
    response.statusCode = 200
    var string = fs.readFileSync('signUp.html', 'utf8')
    response.write(string)
    response.end()
  } else
  if (path === "/signUp" && method === 'POST') {
    request.on('data', chunk => {
      let json = JSON.parse(chunk.toString())
      console.log(json)
    });
    
    response.statusCode = 200
    response.end()
  } else {
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('请求错误，请返回')
    response.end()
  }


  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)