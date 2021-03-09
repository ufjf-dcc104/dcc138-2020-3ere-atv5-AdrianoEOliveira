export default class Sprite
{
    //E responsável por modelar algo que se move na tela
    constructor({x=100,y=100,w=20,h=20,color="white",vx=0,vy=0}={})
    {
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.w=w;
        this.h=h;
        this.color=color;
        this.cena=null;
        this.mx=0;
        this.my=0;
    }
    desenhar(ctx)
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x- this.w/2,this.y-this.h/2,this.w,this.h);
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(this.mx*this.cena.mapa.TAMANHO,
            this.my*this.cena.mapa.TAMANHO,
            this.cena.mapa.TAMANHO,
            this.cena.mapa.TAMANHO);
    }
    passo(dt)
    {
        this.x = this.x + this.vx*dt;
        this.y = this.y + this.vy*dt;
        this.mx=Math.floor(this.x/this.cena.mapa.TAMANHO);
        this.my=Math.floor(this.y/this.cena.mapa.TAMANHO);
    }
    colidiuCom(outro)
    {
        return !((this.x-this.w/2>outro.x+outro.w/2)
            ||(this.x+this.w/2<outro.x-outro.w/2)
            ||(this.y-this.h/2>outro.y+outro.h/2)
            ||(this.y+this.h/2<outro.y-outro.h/2))
    }
}