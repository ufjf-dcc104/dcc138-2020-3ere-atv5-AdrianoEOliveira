export default class Cena
{
    /* E responsável por desenhar elementos na tela de uma animação
    */
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.sprites=[];
    }
    desenhar()
    {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        for (let s = 0; s < this.sprites.length; s++) {
            const sprite = this.sprites[s];
            sprite.desenhar(this.ctx);
        }
    }
    adicionarSprite(sprite)
    {
        this.sprites.push(sprite);
    }
    passo(dt)
    {
        for (const sprite of this.sprites) {
            sprite.passo(dt);
        }
    }
}