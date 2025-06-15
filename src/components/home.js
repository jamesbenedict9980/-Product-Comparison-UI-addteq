import React, { useState,useEffect } from 'react';
import productsData from '../data/products';
import ProductList from './pages/ProductList';
import CompareSection from './pages/CompareSection';
function App() {

const COMPARE_KEY = 'compare_ids';

const [compareIds, setCompareIds] = useState(() => {
  const stored = localStorage.getItem("comparedProducts");
  return stored ? JSON.parse(stored) : [];
});


useEffect(() => {
  localStorage.setItem("comparedProducts", JSON.stringify(compareIds));
}, [compareIds]);


  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter(pid => pid !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      } else {
        alert('You can only compare up to 3 products.');
        return prev;
      }
    });
  };

  const removeFromCompare = (id) => {
    setCompareIds(prev => prev.filter(pid => pid !== id));
  };
  console.log("compareIds",compareIds);

  const selectedProducts = productsData.filter(p => compareIds.includes(p.id));
  console.log("Product Data", selectedProducts);

  return (
    <div className="App">
      {compareIds.length >= 2 && (
        <CompareSection
          products={selectedProducts}
          onRemove={removeFromCompare}
        />
      )}

      <h2>Product Store</h2>

      <ProductList
        products={productsData}
        onCompareToggle={toggleCompare}
        selectedProducts={compareIds}
      />
    </div>
  );
}

export default App;
