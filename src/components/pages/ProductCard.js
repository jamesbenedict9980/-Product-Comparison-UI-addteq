import React from 'react';
import '../../css/ProductCard.css';

const ProductCard = ({ product, onCompareToggle, isSelected, disableButton }) => {
  return (
    <div className={`product-card ${isSelected ? 'selected' : ''}`}>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h5>{product.name}</h5>
      <p>{product.price}</p>
      <ul>
        {product.features.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>

      <button
        onClick={() => onCompareToggle(product.id)}
        disabled={disableButton && !isSelected}
        className={disableButton && !isSelected ? 'disabled-button' : ''}>
        {isSelected ? 'Remove from Compare' : 'Add to Compare'}
      </button>
    </div>
  );
};

export default ProductCard;
