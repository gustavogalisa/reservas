const express = require('express');
const path = require();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/reservas'));

app.get('/*', (req, res) =>
                res.sendFile(__dirname + '/dist/reservas/index.html'));

app.listen(PORT, () => {
  console.log('Servidor inicido na porta:' + PORT)
})
