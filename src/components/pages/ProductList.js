import React from 'react';
import ProductCard from './ProductCard';
import '../../css/ProductList.css';

const ProductList = ({ products, onCompareToggle, selectedProducts }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onCompareToggle={onCompareToggle}
          isSelected={selectedProducts.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
