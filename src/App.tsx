import React from 'react';
import './App.css';
import { Sticky } from 'semantic-ui-react';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Sticky context={document.getElementById('root')}>
          <Header />
        </Sticky>
        <Home />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
