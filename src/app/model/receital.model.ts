export interface Receita {
    id: string;//id: string;
    nome: string;
    descricao: string;
    //nota: number;
    tipo: string,
    foto: string;
    //comentarios: Comentario[];
    ingredientes: string;
}



// interface Comentario {
//     id: string;
//     autor: string;
//     texto: string;
//     data: string;
// };

export function create2() {
    return {
        id:'',
        nome: '',
        foto: '',
        descricao:'',
        ingredientes:'',
        tipo:''
    };
}

// interface Ingrediente {
//     id: string;
//     nome: string;
//     tipo: string;
//     unidade: string;
//     quantidade: number;
// }