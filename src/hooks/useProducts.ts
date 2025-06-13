// hooks/useProducts.ts
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type Product = {
  id: string;
  name: string;
  price: number;
};
type ProductsResponse = Product[];
type ProductResponse = Product;
type CreateProductInput = {
  name: string;
  price: number;
};
type UpdateProductInput = {
  id: string;
  name?: string;
  price?: number;
};
type DeleteProductInput = {
  id: string;
};
export function useProducts() {
  return {
    getProducts: useMutation<ProductsResponse, Error>({
      mutationFn: async () => {
        const response = await axios.get('/api/products');
        return response.data;
      },
    }),
    getProduct: useMutation<ProductResponse, Error, { id: string }>({
      mutationFn: async ({ id }) => {
        const response = await axios.get(`/api/products?id=${id}`);
        return response.data;
      },
    }),
    createProduct: useMutation<ProductResponse, Error, CreateProductInput>({
      mutationFn: async (input) => {
        const response = await axios.post('/api/products', input);
        return response.data;
      },
    }),
    updateProduct: useMutation<ProductResponse, Error, UpdateProductInput>({
      mutationFn: async (input) => {
        const response = await axios.put(`/api/products/${input.id}`, input);
        return response.data;
      },
    }),
    deleteProduct: useMutation<void, Error, DeleteProductInput>({
      mutationFn: async ({ id }) => {
        await axios.delete(`/api/products/${id}`);
      },
    }),
  };
}
// This hook provides methods to interact with the products API, including fetching, creating, updating, and deleting products.