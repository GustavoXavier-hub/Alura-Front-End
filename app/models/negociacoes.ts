import { Negociacao } from "./negociacao";

export class  Negociacoes{
    private negociaçoes :Array<Negociacao> = [];


    adiciona(negociacao: Negociacao) {
        this.negociaçoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociaçoes;
    }
} 