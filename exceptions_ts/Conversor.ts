try{
    const resultado = converte(123);

    console.log(resultado);
}catch(error: any){
    if(error instanceof TypeError)
        console.error('Voce digitou um valor que nao e do tipo string!');
    else
    console.error('Erro inesperado!', error.message);
}finally{
    console.log('Programa Finalizado!');
}


export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}