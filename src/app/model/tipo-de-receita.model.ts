export interface TipoDeReceitas{
    id: string;
    foto: string;
    nome: string;
}

export function create() {
    return {
        id:'',
        nome: '',
        foto: ''
    };
}