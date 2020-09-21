
import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'



export default class Delete extends Component{
    state = {
        product : {}
    }
    

    async componentDidMount(){
      const { id } = this.props.match.params

      const response =   await api.get(`/products/del/${id}`)
    
      this.setState({ product: response.data})
       
    }

    render(){
        const { product } = this.state

        return(
            <div className="dele">
            <h1>Deletado com sucesso!</h1>
            <p>Produto {product.title} deletado.</p>
            <Link to="/">Voltar</Link>
            </div>
        )
       
    }
}