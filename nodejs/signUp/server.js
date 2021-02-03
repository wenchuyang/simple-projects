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

  if (path === '/' || (path === '/signUp.html' && method === 'GET')) {
    response.statusCode = 200
    var string = fs.readFileSync('signUp.html', 'utf8')
    response.write(string)
    response.end()
  } else
  if (path === '/index.html') {
    response.statusCode = 200
    var string = fs.readFileSync('index.html', 'utf8')
    var cookies = {};
    request.headers.cookie && request.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    // 拿到name为sign_in_email的cookie，再到数据库里去找这个email，通过email找到用户名，将用户名显示出来
    if (cookies.sign_in_email) {
      let users = JSON.parse(fs.readFileSync('./database.db', 'utf8'))
      let loginUser = {}
      users.forEach(user => {
        if (user.email === cookies.sign_in_email) {
          loginUser = user
        }
      })
      if (Object.keys(loginUser).length) { // 一般情况能登上去肯定这个值是存在的
        string = string.replace('&&&用户&&&', loginUser.userName)
      } else {
        string = string.replace('&&&用户&&&','')
      }
    } else {
      string = string.replace('&&&用户&&&','')
    }
    response.write(string)
    response.end()
  } else if (path === '/signUp' && method === 'POST') {
    let data=[];
    request.on('data', chunk => {
      json = JSON.parse(chunk.toString())
      Object.keys(json).forEach((key, index)=>{
        data[index] = json[key]
      })
    }).on('end', () => {
      let [userName, email, password, passwordConfirmation] = data
      if (email.indexOf('@')===-1 || email.indexOf('@')===email.length) {
        response.statusCode = 400
        response.setHeader('Content-Type', 'text/json; charset=utf-8')
        response.write(`{
          "success": false,
          "email": "invalid"
        }`)
      } else if(password!==passwordConfirmation) {
        response.statusCode = 400
        response.setHeader('Content-Type', 'text/json; charset=utf-8')
        response.write(`{
          "success": false,
          "password": "notMatch"
        }`)
      } else {
        let users = fs.readFileSync('./database.db', 'utf8')
        users = JSON.parse(users)
        let found = false
        users.forEach(user=>{
          if(user.email === email) {
            found = true
          }
        })
        if (found) {
          response.statusCode = 400
          response.write(`{
            "success": false,
            "email": "existed"
          }`)
        } else {
          response.statusCode = 200
          users.push({
            "userName": userName, 
            "email": email,
            "password": password
          })
          let userStr = JSON.stringify(users)
          fs.writeFileSync('./database.db', userStr)
          response.write(`{
            "success": true
          }`)
        }
      }
      response.end()
    });
  } else if (path === '/signIn' && method === 'POST') {
    let data={};
    request.on('data', chunk => {
      json = JSON.parse(chunk.toString())
      Object.keys(json).forEach((key, index)=>{
        data[key] = json[key]
      })
    }).on('end', () => {
      let users = fs.readFileSync('./database.db', 'utf8')
      users = JSON.parse(users)
      let found = false
      let loginUser = {}
      users.forEach((user)=>{
        if (user.email === data.email) {
          found = true
          loginUser = user
        }
      })      
      if (found && loginUser.password === data.password) {
        response.writeHead(200, {
          'Set-Cookie': [`sign_in_email=${data.email}`]
        })
        response.write(`{
          "success": true
        }`)
      } else if (found) {
        response.statusCode = 400
        response.write(`{
          "success": false,
          "info": "password"
        }`)
      } else {
        response.statusCode = 400
        response.write(`{
          "success": false,
          "info": "user"
        }`)
      }
      response.end()
    })
  } else if (path === '/signIn.html' && method === 'GET') {
    response.statusCode = 200
    var string = fs.readFileSync('signIn.html', 'utf8')
    response.write(string)
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