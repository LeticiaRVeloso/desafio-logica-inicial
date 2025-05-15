class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    Atacar() {
        let ataque;
        if(this.tipo === "mago"){
            ataque = "magia";
        } else if(this.tipo === "guerreiro"){
            ataque = "espada";
        }else if(this.tipo === "monge"){
            ataque = "artes marciais";
        }else {
            ataque = "shuriken";
        }
            
    
        return ataque;

    }
    escrever(){console.log('O ' + this.nome + 'atacou com ' + this.Atacar());

    }
}

let guerreiro = new heroi("Lucas ", "26", "monge")

guerreiro.escrever()