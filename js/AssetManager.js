export default class AssetManager{
    constructor()
    {
        this.aCarregar = 0;
        this.carregadas = 0
        this.imagens = new Map();
    }
    adicionaImagem(chave,source)
    {
        const img1 = new Image();
        const that=this;
        img1.addEventListener("load",function()
        {
            console.log(`Imagem ${that.carregadas}/${that.aCarregar}carregado!`);
            that.carregadas++;
        })
        img1.src = source;
        this.imagens.set(chave,img1);
        this.aCarregar++;
    }
    Img(chave)
    {
        return this.imagens.get(chave);
    }

    progresso(){
        if(this.aCarregar>0)
        {
            return`${(this.carregadas/this.aCarregar*100).toFixed(2)}%`;
        }
        return "Nada a carregar"
    }
    acabou()
    {
        return this.carregadas===this.aCarregar;
    }
}