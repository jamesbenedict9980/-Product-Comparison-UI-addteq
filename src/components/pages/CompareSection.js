import React from 'react';
import '../../css/CompareSection.css';

const CompareSection = ({ products, onRemove }) => {
  return (
    <div className="compare-section">
      <h4>Compare Products</h4>
      <div className="compare-table">
        {products.map(product => (
          <div key={product.id} className="compare-card">
            <img src={product.image} alt={product.name} />
            <h6>{product.name}</h6>
            <p>{product.price}</p>
            <ul>
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button onClick={() => onRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareSection;
