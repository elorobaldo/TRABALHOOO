"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3000/prod", {
    cache: "no-cache"
  });
  const prods = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {prods.map(prod => (
        <div key={prod.id}>
          <p>{prod.titulo}</p>
          <p>{prod.dataCadastro}</p>
          <p>{prod.preco}</p>
          <p>{prod.descricao}</p>
          <p>{prod.imagem}</p>
          <Link href={`/prod/${prod.id}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}