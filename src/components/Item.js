import React from 'react'
import './item.css'

const Item = ({title, price, img, desc}) => {
  return (
    <div className="item">
      <div className="img-field">
        <img src={img} alt="product" />
      </div>
      <div className="text-field">
        <div className="title-price-field">
          <h2>{title}</h2>
          <p>${price}</p>
        </div>
        <div className="description-field">
            <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Item
