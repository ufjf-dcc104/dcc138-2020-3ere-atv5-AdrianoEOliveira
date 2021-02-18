import Cena from"./Cena.js"
import Sprite from "./Sprite.js";

const canvas = document.querySelector("canvas");
const cena1= new Cena(canvas);
const pc = new Sprite({});
const en1 = new Sprite({x:140,y:100,w:10,h:10,color:"red"});
cena1.adicionarSprite(pc);
cena1.adicionarSprite(en1);

cena1.quadro(0);



