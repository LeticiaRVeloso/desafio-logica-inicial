let nome = "Liz ";
let xp = 6665;
let nivel;

if(xp < 1000){nivel = "Ferro";}
else if (xp <=2000){nivel = "Bronze";}
else if (xp <=5000){nivel = "Prata";}
else if (xp <=7000){nivel = "Ouro";}
else if (xp <=8000){nivel = "Platina";}
else if (xp <=9000){nivel = "Ascedente";}
else if (xp <=10000){nivel = "Imortal";}
else{"Radiante";
}

console.log("O herói de nome de "+ nome + "está no nível de "+ nivel )