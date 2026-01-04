function Personagem(nickname, raça, level) {
    this.nickname = nickname;
    this.raça = raça;
    this.level = level;
}

Personagem.prototype.apresentar = function() {
    console.log(`Hell yeah! Eu me chamo ${this.nickname}, um ${this.raça} de nível ${this.level}.`);
}

function Guerreiro(nickname, raça, level, força) {
    Personagem.call(this, nickname, raça, level);
    this.força = força;
    this.classe = 'Guerreiro';
}

Guerreiro.prototype = Object.create(Personagem.prototype);
Guerreiro.prototype.constructor = Guerreiro;

function Mago(nickname, raça, level, inteligência) {
    Personagem.call(this, nickname, raça, level);
    this.inteligência = inteligência;
    this.classe = 'Mago';
}

Mago.prototype = Object.create(Personagem.prototype);
Mago.prototype.constructor = Mago;

function Arqueiro(nickname, raça, level, agilidade) {
    Personagem.call(this, nickname, raça, level);
    this.agilidade = agilidade;
    this.classe = 'Arqueiro';
}

Arqueiro.prototype = Object.create(Personagem.prototype);
Arqueiro.prototype.constructor = Arqueiro;

const personagem1 = new Guerreiro('Thorin', 'Anão', 10, 80);
const personagem2 = new Mago('Gandalf', 'Humano', 20, 100);
const personagem3 = new Arqueiro('Legolas', 'Elfo', 15, 90);

console.log(personagem1);
personagem1.apresentar();

console.log(personagem2);
personagem2.apresentar();

console.log(personagem3);
personagem3.apresentar();