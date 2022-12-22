var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'test/html'});
    res.write('<h2> Brasil 2 x 1 Suica </h2>\n ');
   res.write(Date().substring(16,24)+ '<br>');
   res.write(dia.diaDaSemana()+'</p><br>')
    res.end('Leo viado');

}).listen(8080)