import React, { useState, useEffect } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { Loading } from '../components/ui/Loading';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Digital Store</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;