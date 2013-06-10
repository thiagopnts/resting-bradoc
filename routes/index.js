var express = require('express');
var bradoc = require('bradoc');
var app = module.exports = express();

app.get('/', function(req, res){
  res.render('index');
});

app.get('/gen', function(req, res){
  res.redirect('/');
});

app.get('/cpf', function(req, res){
  res.json({
    cpf : bradoc.cpf.generate()
  });
});

app.get('/cnpj', function(req, res){
  res.json({
    cnpj : bradoc.cnpj.generate()
  });
});

app.get('/gen/cpf', function(req, res){
  res.render('cpf', {
    cpf : bradoc.cpf.generate()
  });
});

app.get('/gen/cnpj', function(req, res){
  res.render('cnpj', {
    cnpj : bradoc.cnpj.generate()
  });
});