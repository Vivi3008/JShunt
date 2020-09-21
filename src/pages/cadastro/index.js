import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'

export default class Cadastro extends Component{

    async cadastrar(){
         await api.post("/products")
            return alert('Cadastrado com sucesso!')
    }


    render(){
        return(
            <div className="content">
                <h1>Cadastro de produto</h1>

                <form action={this.cadastrar} method="post">
                    
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" required/>
                    <label htmlFor="description">Descrição:</label>
                    <textarea name="description" id="description" cols="30" rows="10" required></textarea>
                    <label htmlFor="url">URL:</label>
                    <input type="url" id="url" required/>

                    <div className="buttons">
                        <button type="submit">Cadastrar</button>
                        <button type="reset">Limpar</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}