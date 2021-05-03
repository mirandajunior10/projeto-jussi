import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import IPokemonResponse from '../interfaces/IProductResponse';
import api from '../services/api';

interface ProductsContextData {
  products: IPokemonResponse[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
interface IPokemonAPIResponse {
  results: IPokemonResponse[];
  next?: string;
  count: number;
  previous?: string;
}
const ProductContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
);

const ProductsProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<IPokemonResponse[]>(() => {
    const user = localStorage.getItem('@jussi:products');
    if (user) {
      return JSON.parse(user);
    }
    return [] as IPokemonResponse[];
  });

  const fetchProducts = useCallback(async () => {
    if (products.length > 0) return;
    let response = await api.get<IPokemonAPIResponse>('pokemon');
    let productsAPIResponse = [];
    productsAPIResponse.push(...response.data.results);

    do {
      if (response.data.next) {
        // eslint-disable-next-line no-await-in-loop
        response = await api.get<IPokemonAPIResponse>(response.data.next);
        productsAPIResponse.push(...response.data.results);
      }
    } while (response.data.next);

    productsAPIResponse = productsAPIResponse.sort((productA, productB) => {
      if (productA.name < productB.name) {
        return -1;
      }
      if (productA.name > productB.name) {
        return 1;
      }
      return 0;
    });

    setProducts(productsAPIResponse);
    localStorage.setItem(
      '@jussi:products',
      JSON.stringify(productsAPIResponse),
    );
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider value={{ products, query, setQuery }}>
      {children}
    </ProductContext.Provider>
  );
};

function useProducts(): ProductsContextData {
  const context = useContext(ProductContext);

  return context;
}

export { ProductsProvider, useProducts };
