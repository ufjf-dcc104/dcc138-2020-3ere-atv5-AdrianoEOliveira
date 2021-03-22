export default class Mapa
{
    constructor(linhas=15,colunas = 15 ,tamanho=32)
    {
        this.LINHAS = linhas;
        this.COLUNAS= colunas;
        this.TAMANHO =  tamanho;
        this.tiles = [];
        for (let l = 0; l < this.LINHAS; l++) 
        {
            this.tiles[l] = []
            for (let c = 0; c < this.COLUNAS; c++) 
            {
            this.tiles[l][c] = 0;
            }
        this.cena = null;
        }
    }
    desenhar(ctx)
    {
        let img =new Image();
        img = this.cena.assets.Img("terreno");
        let chest = new Image();
        chest = this.cena.assets.Img("chest")
        let coin = new Image();
        coin = this.cena.assets.Img("coin")
        let linha = 21;
        let coluna = 8;
        for (let l = 0; l < this.LINHAS; l++) 
        {
            for (let c = 0; c < this.COLUNAS; c++) 
            {

                ctx.drawImage(img,coluna * 32,linha *32,32,32,
                    c*32,l*32,32,32);
                    if(this.tiles[l][c]==1)
                    {
                        ctx.drawImage(img,21 * 32,21 *32,32,32,
                            c*32,l*32,32,32);
                    }
                    if(this.tiles[l][c]==2)
                    {
                        ctx.drawImage(chest,0,0,32,32,
                            c*32,l*32,32,32);
                    }
                    if(this.tiles[l][c]==3)
                    {
                        ctx.drawImage(coin,0,0,32,32,
                            c*32,l*32,32,32);
                    }

                ctx.strokeRect(c*this.TAMANHO,l*this.TAMANHO,this.TAMANHO,this.TAMANHO);
            }
        }
    }
    carregaMapa(modelo)
    {
        this.LINHAS= 15;
        this.COLUNAS =15;

        this.tiles=[]
        for (let l = 0; l < this.LINHAS; l++) 
        {
            this.tiles[l] = []
            for (let c = 0; c < this.COLUNAS; c++) 
            {
            this.tiles[l][c] = modelo[l][c];
            }
        }
    }
}