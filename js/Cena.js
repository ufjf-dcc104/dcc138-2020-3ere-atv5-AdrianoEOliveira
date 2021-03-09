export default class Cena
{
    /* E responsável por desenhar elementos na tela de uma animação
    */
    constructor(canvas,assets =null){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.sprites=[];
        this.aRemover=[];
        this.t0=0;
        this.dt=0;
        this.idAnim = null;
        this.assets= assets;
        this.mapa=null;
    }
    desenhar()
    {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

        this.mapa?.desenhar(this.ctx);
        if(this.assets.acabou())
        {
            for (let s = 0; s < this.sprites.length; s++) {
                const sprite = this.sprites[s];
                sprite.desenhar(this.ctx);
                sprite.AplicaRestrições();
            }
        }
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText(this.assets?.progresso(),10,20);
    }
    adicionarSprite(sprite)
    {
        sprite.cena=this;
        this.sprites.push(sprite);
    }
    passo(dt)
    {
        if(this.assets.acabou())
        {
            for (const sprite of this.sprites) 
            {
                sprite.passo(dt);
            }
        }
    }

    quadro(t)
    {
        this.t0 = this.t0 ?? t;
        this.dt = (t-this.t0)/1000;

        this.passo(this.dt);
        this.desenhar();
        this.checarColisão();
        this.removerSprites();
        this.t0 = t;
        this.iniciar();
    }
    iniciar()
    {
        this.idAnim = requestAnimationFrame((t)=>{this.quadro(t)});
    }
    parar(){
        cancelAnimationFrame(this.idAnim);
        this.t0=null;
        this.dy=0;
    }
    checarColisão()
    {
        for (let i = 0; i < this.sprites.length - 1; i++) 
        {
            const sprA = this.sprites[i];
            for (let j = i+1; j < this.sprites.length; j++)
            {
                const sprB = this.sprites[j];
                if(sprA.colidiuCom(sprB))
                {
                    this.quandoColidir(sprA,sprB)
                }               
            }
        }
    }
    quandoColidir(a,b)
    {
        if(!this.aRemover.includes(a))
        {
            this.aRemover.push(a);
        }
        if(!this.aRemover.includes(b))
        {
            this.aRemover.push(b);
        }

    }
    removerSprites()
    {
        for (let i = 0; i < this.aRemover.length; i++) {
            const alvo = this.aRemover[i];
            const idx = this.sprites.indexOf(alvo);
            if(idx >=0)
            {
                this.sprites.splice(idx,1);
            }
        }
        this.aRemover = [];
    }
    configuraMapa(mapa)
    {
        this.mapa = mapa;
        this.mapa.cena=null;
    }
}