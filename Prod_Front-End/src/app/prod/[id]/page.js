'use client'

import { useRouter } from "next/navigation";

export default async function Prod({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3001/prods", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const prod = await req.json();
    console.log(prod)

    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3000/prod", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div>
            <p>{prod.titulo}</p>
            <p>{prod.dataCadastro}</p>
            <p>{prod.preco}</p>
            <p>{prod.descricao}</p>
            <p>{prod.imagem}</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}