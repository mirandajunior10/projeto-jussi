import React from 'react';

import { ProductsProvider } from './products';

const AppProvider: React.FC = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default AppProvider;
