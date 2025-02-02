import React, { useState, useEffect } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { Loading } from '../components/ui/Loading';

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const response = await fetch('/api/my-products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching my products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyProducts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">My Products</h1>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">You haven't purchased any products yet.</p>
        </div>
      )}
    </div>
  );
};

export default MyProducts;