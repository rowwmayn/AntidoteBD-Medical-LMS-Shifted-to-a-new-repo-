// client/src/components/products/ProductDetails.jsx
import React from 'react';
const ProductDetails = ({ product, onPurchase, isLoading }) => {
    if (!product) return null;
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        
        <div className="mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            product.type === 'exam' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <p className="text-2xl font-bold text-navy-600">৳{product.price}</p>
        </div>
        
        <Button
          onClick={onPurchase}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Processing...' : 'Purchase Now'}
        </Button>
      </div>
    );
  };
  export default ProductDetails;