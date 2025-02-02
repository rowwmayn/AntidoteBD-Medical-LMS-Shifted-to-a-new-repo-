import React, { useState, useEffect } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { Loading } from '../components/ui/Loading';
import { ProductDetails } from '../components/products/ProductDetails';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const handlePurchase = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}/purchase`, {
        method: 'POST',
      });
      const data = await response.json();
    } catch (error) {
      console.error('Error purchasing product:', error);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Available Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductGrid
            products={products}
            onProductSelect={setSelectedProduct}
          />
        </div>
        <div className="lg:col-span-1">
          {selectedProduct && (
            <ProductDetails
              product={selectedProduct}
              onPurchase={() => handlePurchase(selectedProduct._id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;