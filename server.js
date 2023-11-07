// importiamo la libreria http tramite "require" che è l'alter-ego di "import"
const http = require("http");

// importiamo libreria dotenv
const dotenv = require("dotenv");

// avviamo dotenv
dotenv.config();

// creiamo una variabile per la porta da utilizzare, impostando un'alternativa nel caso in cui la porta è già occupata
const port = process.env.PORT || 3000;

// creiamo adesso il server invocando la funzione "createServer" con argomento una funzione che avrà come parametri "req e res" 
const server = http.createServer(function (req, res) {

    // specifichiamo il modo in cui il server deve rispondere
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Hello World!</h1>
    NICKNAME: ${process.env.NICKNAME}<br>
    PIN: ${process.env.PIN}
    `);
});

// mettiamo il server in ascolto verso la porta da noi scelta mediante la funzione "listen" che avrà come primo parametro la porta sulla quale deve rimanere in ascolto e come secondo argomento la funzione che dovrà essere eseguita quando il server parte (il secondo parametro opzionale, se non specificato, è di base localhost)
server.listen(port, function () {
    console.log("Server is running on port:" + port);
});