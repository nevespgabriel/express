const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); //Usa pra transformar os "" do package.json em atributos e objetos de fato

app.get('/:usuario/:repositorio', (req, res) => {
    console.log(`Params depois do ?: id é ${req.query.id} e idade é ${req.query.idade}`)
    console.log(`Params do body: ${req.body}`);
    res.send(`Params antes de ?: Repositório ${req.params.repositorio} de ${req.params.usuario}`);
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});