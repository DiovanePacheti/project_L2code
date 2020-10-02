
//mascara de modeda BRL
export function currency(e: React.FormEvent<HTMLInputElement>){
    let value = e.currentTarget.value;
    value = value.replace(/\D/g,  "");//so numeros
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")//Colocando a virgula pegando tudo e depois os ultimos 2 digitos
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".") //procure sentença de 3 caracteres enqualquer lugar da string
    e.currentTarget.value = value;
    return e;
}

//mascara de cpf
export function cpf(e: React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1-$2")
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".") //procure sentença de 3 caracteres enqualquer lugar da string
    e.currentTarget.value = value;
    return e;
}

//mascara de telefone
export function telefone(e:React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1)$2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    e.currentTarget.value = value;
    return e;
}

// mascara de nome
export function nome(e:React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 45;
    let value = e.currentTarget.value;
    value = value.replace(/(\d)/g, "");
    e.currentTarget.value = value;
    return e
} 


// mascara de email
export function email(e:React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 45;
    let value = e.currentTarget.value;
    value = value.replace(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "");
    e.currentTarget.value = value;
    return e
} 


// mascara de previsao de formatura
export function formatura(e:React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 7;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(\d)/, "$1/$2")
    e.currentTarget.value = value;
    return e
} 

// mascara de mês ano
export function mesAno(e:React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 7;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2")
    e.currentTarget.value = value;
    return e
}

// mascara de parcelas
export function parcelas(e:React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 3;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    e.currentTarget.value = value;
    return e
}