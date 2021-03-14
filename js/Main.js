import AssetManager from "./AssetManager.js";
import Cena from"./Cena.js"
import Mapa from "./mapa.js";
import Mixer from "./mixer.js";
import Sprite from "./Sprite.js";
import  modeloMapa1 from "./maps/mapa1.js";

const assets= new AssetManager(new Mixer(10));
assets.adicionaImagem("humano","assets/humano.png");
assets.adicionaAudio("boom","assets/boom.wav")


const canvas = document.querySelector("canvas");
canvas.width = 20*32;
canvas.height = 10*32;

const cena1= new Cena(canvas,assets);

const mapa1 = new Mapa(10,14,32);
mapa1.carregaMapa(modeloMapa1);
cena1.configuraMapa(mapa1);

//const en1 = new Sprite({x:140,y:100,w:20,h:20,vx:-10,color:"red"});
//cena1.adicionarSprite(pc);
//cena1.adicionarSprite(en1);
//cena1.adicionarSprite(new Sprite({x:50,y:100,w:20,h:20,vx:-10,color:"red"}));

cena1.iniciar();

document.addEventListener("keydown",(e)=>{switch (e.key)
        {
        case "s":
            cena1.iniciar();
            break;
        case "S":
            cena1.parar()
            break;
            case "c":
            assets.play("boom");
            break;
        }
    }
)



