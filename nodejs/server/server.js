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

  var money = +fs.readFileSync('money.db', 'utf8')
  if (path === '/') {
    var string = fs.readFileSync('index.html', 'utf8')
    string = string.replace('&&&amount&&&', money)
    response.write(string)
    response.end()
  } else if (path === '/pay' && method === "POST") {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8')
    if(Math.random() > 0.5){
      let postData;
      getPOSTData(request).then((res)=>{
        postData = res;
        money = money-postData.amount
        response.write(`{
            "money": ${money},
            "success": true
          }`)
        fs.writeFileSync('money.db', money)
        response.end()
      }, (err) => {
        console.log(err)
        response.end()
      });  
    }else{
      response.write(`{
        "money": ${money},
        "success": false
      }`)
      response.end()
    }   
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('没有对应的网页，滚！')
    response.end()
  }



  function getPOSTData(req) {
    return new Promise((resolve, rejective) => {
      let post = {};
      req.on('data', function (data) {
        data = data.toString();
        post = JSON.parse(data)
        resolve(post);
      })
    })
  }



  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)