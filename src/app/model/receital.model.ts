export interface Receita {
    id: number;//id: string;
    nome: string;
    descricao: string;
    nota: number;
    tipo: TipoReceita,
    foto: string;
    comentarios: Comentario[];
    ingredientes: Ingrediente[];
}


export enum TipoReceita {
    fitness = "fitness",
    sobremesas = "sobremesas",
    snacks = "snacks",
    refeicao = "refeicao",
};

interface Comentario {
    id: string;
    autor: string;
    texto: string;
    data: string;
};


interface Ingrediente {
    id: string;
    nome: string;
    tipo: string;
    unidade: string;
    quantidade: number;
}