const http = require('http')
const port = '3000'
const fs = require('fs')

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write('Error : File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    const url = req.url
    switch (url) {
        case '/index':
            renderHTML('./index.html', res)
            break;
        default:
            renderHTML('./index.html', res)
            break;
    }
    
}).listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})