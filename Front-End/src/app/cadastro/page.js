'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [dat, setDat] = useState();
    const [preco, setPreco] = useState();
    const [desc, setDesc] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            dat: dat,
            preco: preco,
            desc: desc
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Data:'
                    nome="data"
                    onChange={e => setDat(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Preco:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Descricao:'
                    nome="descricao"
                    onChange={e => setDesc(e.target.value)}
                    /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}