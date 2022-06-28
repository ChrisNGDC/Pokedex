const express = require('express');
const fs = require('fs');
const app = express();

const port = 8080;

app.use('/', express.static(__dirname));

app.get('/' ,function (req, res) {
    fs.readFile('index.html',  (err, data) => {
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('<h1>Pagina no encontrada</h1>')
        };
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
})

app.use((req, res, next) => {
    res.status(404).send("Esta pagina no existe")
})

app.listen(port, () => {
    console.log("Node con Express funcionando con exito")
})