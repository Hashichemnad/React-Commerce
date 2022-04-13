import React from "react";
import ProductTile from "./ProductTile";

class ProductCatalog extends React.Component {

    renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    render() {
        let tiles = [];
        for (let i = 0; i < this.props.products.length; i++) {
            const current_item = this.props.products[i];
            tiles.push(this.renderTile(current_item));
        }
        return tiles;
    }
}

export default ProductCatalog;