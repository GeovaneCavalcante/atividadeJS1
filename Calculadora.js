function Calculadora(valor1, valor2) {
  this.valor1 = valor1;
  this.valor2 = valor2;
  this.histo = [];
}

Calculadora.prototype.soma = function(){
  console.log(`${this.valor1} + ${this.valor2} = ${this.valor1 + this.valor2}`);
  this.addHistorico(`${this.valor1} + ${this.valor2} = ${this.valor1 + this.valor2}`);
}

Calculadora.prototype.subtracao = function() {
  console.log(`${this.valor1} - ${this.valor2} = ${this.valor1 - this.valor2}`);
  this.addHistorico(`${this.valor1} - ${this.valor2} = ${this.valor1 - this.valor2}`);
}

Calculadora.prototype.multiplicacao = function() {
  console.log(`${this.valor1} X ${this.valor2} = ${this.valor1 * this.valor2}`);
  this.addHistorico(`${this.valor1} X ${this.valor2} = ${this.valor1 * this.valor2}`);
}

Calculadora.prototype.divisao = function() {
  console.log(`${this.valor1} / ${this.valor2} = ${this.valor1 / this.valor2}`);
  this.addHistorico(`${this.valor1} / ${this.valor2} = ${this.valor1 / this.valor2}`);
}

Calculadora.prototype.addHistorico = function(obj) {
  if (this.histo.length == 0) {
    this.histo[0] = obj;

  }else{
    this.histo[this.histo.length] = obj;
  }
}

Calculadora.prototype.mostrarHistorico = function() {
  for (var i = 0; i < this.histo.length; i++) {
    console.log(`${i+1}º operação -> ${this.histo[i]}`);
  }
}
