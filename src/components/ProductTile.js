import React from "react"
import style from './ProductTile.css'


class ProductTile extends React.Component {
    render(){
        return(
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/logo192.png' alt="Placeholder"></img>
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title product-title">{this.props.product.name}</p>

                    <div class="content">
                    {this.props.product.short_description}
                        <br></br>
                    </div>
                    <a class="button is-primary" href="product.html" target="_blank">
                        <strong>More Details</strong>
                    </a>
                </div>
            </div>
        )
    }
}

export default ProductTile;