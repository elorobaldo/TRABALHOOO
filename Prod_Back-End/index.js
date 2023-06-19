const express = require('express');
const path = require('path');
const Prod = require("./models/prod");
const cors= require('cors');
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/prods', async function(req, res){
  try {
    var prods = await Prod.select();
    res.json(prods.rows);
  } catch (error) {
    console.error('Erro ao buscar prods:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar prods' });
  }
});

app.post('/prods', async function(req, res){
  try {
    console.log(req.body.titulo)
    var prods = await Prod.insert(req.body);
    res.json(prods.rows);
  } catch (error) {
    console.error('Erro ao buscar prods:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar prods' });
  }
});

app.put('/prods', async function(req, res){
  try {
    var prods = await Prod.update(req.body.id, req.body);
    res.json(prods.rows);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produto' });
  }
});

app.delete('/prods', async function(req, res){
  try {
    var prod = await Prod.delete(req.body.id);
    res.json(prod.rows);
  } catch (error) {
    console.error('Erro ao atualizar prod:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar prod' });
  }
});


app.listen(3001, function() {
  console.log(`app de Exemplo escutando na porta! ${3001}`)
});
