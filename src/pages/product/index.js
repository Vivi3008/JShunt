import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './style.css'
import arrow from '../../assets/arrow-left.svg'
export default class Product extends Component {
    state = {
        product: {}
    }
    
    async componentDidMount(){
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`)

        this.setState({ product: response.data })
    }

    render(){
      const { product } = this.state

      return (
          <div className="product-info">
              <div className="box">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
              </div>
             <div className="link">
                <Link to="/">
                     <img src={arrow} alt="Voltar" />
                     <span>Voltar</span>
                </Link>
             </div>
              
          </div>
        
          
      )
    }
}