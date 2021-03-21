import AssetManager from "./AssetManager.js";
import Cena from"./Cena.js"
import Mapa from "./mapa.js";
import Mixer from "./mixer.js";
import Sprite from "./Sprite.js";
import  modeloMapa1 from "./maps/mapa1.js";
import inputManager from "./inputManager.js";

const assets= new AssetManager(new Mixer(10));
assets.adicionaImagem("humano","assets/humano.png");
assets.adicionaImagem("terreno","assets/terrain_atlas.png")
assets.adicionaAudio("boom","assets/boom.wav")
assets.adicionaAudio("hurt","assets/hurt.wav")
const input = new inputManager();

const canvas = document.querySelector("canvas");
canvas.width = 15*32;
canvas.height = 15*32;
input.configurarTeclado(
    {"ArrowLeft":"MOVE_ESQUERDA",
     "ArrowRight" : "MOVE_DIREITA",
     "ArrowUp":"MOVE_CIMA",
     "ArrowDown":"MOVE_BAIXO",
    }
);


const cena1= new Cena(canvas,assets);

const mapa1 = new Mapa(15,15,32);
mapa1.carregaMapa(modeloMapa1);
cena1.configuraMapa(mapa1);



const pc = new Sprite({x:140,y:100,w:20,h:20,vx:0,color:"white"});
pc.controlar = function(dt)
{
    if(input.comandos.get("MOVE_ESQUERDA"))
    {
        this.vx=-50;
    }
    else
    {
        if(input.comandos.get("MOVE_DIREITA"))
        {
            this.vx=50;
        }
        else{
           this.vx=0;
        }
    }
        if(input.comandos.get("MOVE_CIMA"))
    {
        this.vy=-50;
    }
    else
    {
        if(input.comandos.get("MOVE_BAIXO"))
        {
            this.vy=50;
        }
        else{
           this.vy=0;
        }
    }
}
cena1.adicionarSprite(pc);
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



