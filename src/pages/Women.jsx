import React from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';
function Women() {
  const womenItems = all_products.filter((product) => {
    return product.category === 'women';
  });

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        WOMEN'S CLOTHING
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {womenItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Women;