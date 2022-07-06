const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Bir istek gönderildi')
    const url = req.url
    
    if(url==="/"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write('<h2> index sayfasina hosgeldiniz</h2>')    
    }
    if(url==="/hakkimda"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write('<h2> hakkimda sayfasina hosgeldiniz</h2>')
    }
    if(url==="/iletisim"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write('<h2> iletisim sayfasina hosgeldiniz</h2>')
    }
    res.end()    
})

const port = 5000

server.listen(port, () => {
    console.log(`Sunucu port ${port} da başlatıldı`)
})