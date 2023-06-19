'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [dataCadastro, setDataCadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const prod = {
            titulo: titulo,
            dataCadastro: dataCadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const prodJson = JSON.stringify(prod);
        fetch("http://localhost:3001/prod", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: prodJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            
        <div className={styles.container}>
            <form className={styles.form} action='' onSubmit={cadastrar}>
                <h1 className={styles.um}>
                    Cadastrar
                </h1>

            <div className={styles.inputsingle}>
                <label>Informe o titulo:</label>
                <input
                    type="text"
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                />
                </div>

                <div className={styles.inputsingle}>
                <label>Informe a data:</label>
                 <input
                    type="date"
                    nome="dataCadastro"
                    onChange={e => setDataCadastro(e.target.value)}
                /></div>

                <div className={styles.inputsingle}>
                <label>Informe o preço:</label>
                <input
                    type="number"
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /></div>

                <div className={styles.inputsingle}>
                <label>Informe a descrição:</label>
                <input
                    type="text"
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /></div>

                <div className={styles.inputsingle}>
                <label>Link imagem:</label>
                <input
                    type="link"
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /></div>


<div className={styles.btn}><button className={styles.button} type='submit'>CADASTRAR</button></div>
                    <div className={styles.bt}><a className={styles.butto} href='/'>Voltar</a></div>
            </form>
        </div>
        </div>
    );
}