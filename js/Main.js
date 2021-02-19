import Cena from"./Cena.js"
import Sprite from "./Sprite.js";

const canvas = document.querySelector("canvas");
const cena1= new Cena(canvas);
const pc = new Sprite({vx:10});
const en1 = new Sprite({x:140,y:100,w:20,h:20,color:"red"});
cena1.adicionarSprite(pc);
cena1.adicionarSprite(en1);

cena1.iniciar();

document.addEventListener("keydown",(e)=>{switch (e.key)
        {
        case "s":
            cena1.iniciar();
            break;
        case "S":
            cena1.parar()
            break;
        }
    }
)



