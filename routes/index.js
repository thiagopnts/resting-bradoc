var express = require('express');
var bradoc = require('bradoc');
var app = module.exports = express();

var REMOVE_PUNCTUATION_REGEX = /\.|\-|\//g;

app.get('/', function(req, res){
  res.render('index');
});

app.get('/gen', function(req, res){
  res.redirect('/');
});

app.get('/cpf', function(req, res){
  var cpf = bradoc.cpf.generate();

  res.json({
    cpf : cpf,
    only_numbers : cpf.replace(REMOVE_PUNCTUATION_REGEX, "")
  });
});

app.get('/cnpj', function(req, res){
  var cnpj = bradoc.cnpj.generate();
  res.json({
    cnpj : cnpj,
    only_numbers : cnpj.replace(REMOVE_PUNCTUATION_REGEX, "")
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
