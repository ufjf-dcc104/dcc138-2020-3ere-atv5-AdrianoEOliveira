import AssetManager from "./AssetManager.js";
import Cena from"./Cena.js"
import Mixer from "./mixer.js";
import Sprite from "./Sprite.js";

const assets= new AssetManager();
assets.adicionaImagem("humano","assets/humano.png");
assets.adicionaAudio("boom","assets/boom.wav")

const mixer= new Mixer(10)

const canvas = document.querySelector("canvas");
const cena1= new Cena(canvas,assets);
const pc = new Sprite({vx:10});
const en1 = new Sprite({x:140,y:100,w:20,h:20,color:"red"});
cena1.adicionarSprite(pc);
cena1.adicionarSprite(en1);
cena1.adicionarSprite(new Sprite({x:50,y:100,w:20,h:20,color:"red"}));

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
            mixer.play(assets.audio("boom"));
            break;
        }
    }
)



