import React from 'react'
import "../Assets/Styles/Conponents/product.scss"
const Product = () => {
    return (
        <div className="item product product-item">
            <div className="product-item-info" data-container="product-grid">
                <a href="https://www.lladro.com/en_in/a-mothers-treasure-figurine-en-in-01018294.html" className="product photo product-item-photo" >
                    <img className="photo image img-fluid" src="https://www.lladro.com/media/catalog/product/cache/0c9cd49c1b0bd6eaaa6116604e13fc40/b/8/b82cef77cb1da7dea8add0d9b73f32e28b29bee1a9e3af49147fe25f980b7078462d984246ac1e15199f4ef71d83851fcc298e90d60356eac49313f9dbd8f873.jpg" data-amsrc="https://www.lladro.com/media/catalog/product/cache/0c9cd49c1b0bd6eaaa6116604e13fc40/b/8/b82cef77cb1da7dea8add0d9b73f32e28b29bee1a9e3af49147fe25f980b7078462d984246ac1e15199f4ef71d83851fcc298e90d60356eac49313f9dbd8f873.jpg" loading="lazy" width="700" height="700" alt="A Mother's Treasure Figurine" data-loaded="true" />
                </a>

                <div className="product details product-item-details">
                    <h2 className="product name product-item-name">
                        <a className="product-item-link" href="https://www.lladro.com/en_in/a-mothers-treasure-figurine-en-in-01018294.html">
                            A Mother's Treasure Figurine </a>
                    </h2>
                    <div className="price-box price-final_price" data-role="priceBox" data-product-id="154592" data-price-box="product-id-154592">
                        <span className="price-container price-final_price tax">
                            <span data-price-amount="21000" data-price-type="finalPrice" className="price-wrapper "><span className="price">₹21,000</span></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;