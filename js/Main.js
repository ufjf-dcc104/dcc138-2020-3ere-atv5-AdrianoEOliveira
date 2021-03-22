import AssetManager from "./AssetManager.js";
import Mixer from "./mixer.js";
import inputManager from "./inputManager.js";
import Game from "./game.js";
import CenaCarregando from "./CenaCarregando.js";
import CenaJogo from   "./CenaJogo.js";
import CenaFim from   "./CenaFim.js";


const assets= new AssetManager(new Mixer(10));
assets.adicionaImagem("humano","assets/humano.png");
assets.adicionaImagem("terreno","assets/terrain_atlas.png")
assets.adicionaImagem("chest","assets/Chest.png")
assets.adicionaImagem("coin","assets/coin.jpg")
assets.adicionaImagem("ship","assets/ship.png")
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
     " ":"PROXIMA_CENA",
    }
);

const game = new Game(canvas,assets,input);

const cena1= new CenaJogo(canvas,assets,input,1);
const cena2= new CenaJogo(canvas,assets,input,2);

const carregando= new CenaCarregando(canvas,assets,input);

const fim= new CenaFim(canvas,assets,input);

game.adicionarCena("carregando",carregando);
game.adicionarCena("jogo",cena1);
game.adicionarCena("jogo2",cena2);
game.adicionarCena("fim",fim);










//cena1.adicionarSprite(new Sprite({x:50,y:100,w:20,h:20,vx:-10,color:"red"}));

game.iniciar();

document.addEventListener("keydown",(e)=>{switch (e.key)
    {
    case "s":
        game.iniciar();
        break;
    case "S":
        game.parar()
        break;
        case "c":
        assets.play("boom");
        break;
    }
}
)



