const express = require("express");
const corretora = require("./controllers/corretora.js");
const app = express();
const port = 3000;

app.use(express.json()); //Usa pra transformar os "" do package.json em atributos e objetos de fato

/*app.get('/:usuario/:repositorio', (req, res) => {
    console.log(`Params depois do ?: id é ${req.query.id} e idade é ${req.query.idade}`)
    console.log(`Params do body: ${req.body}`);
    res.send(`Params antes de ?: Repositório ${req.params.repositorio} de ${req.params.usuario}`);
});*/
  
app.get("/corretora", (req, res) => {
    res.json(corretora.index());
})

app.post("/corretora", (req, res) => {
    const code = corretora.store(req.body)
    res.status(code).json();
})

app.get("/corretora/:id", (req, res) => {
    res.json(corretora.show(req.params.id));
})

app.put("/corretora/:id", (req, res) => {
    const code = corretora.update(req.body, req.params.id);
    res.status(code).json();
})

app.delete("/corretora/:id", (req, res) => {
    const code = corretora.destroy(req.params.id);
    res.status(code).json();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});