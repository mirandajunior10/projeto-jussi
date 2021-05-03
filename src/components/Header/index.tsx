/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from '../../assets/logoJussi.svg';
import minicart from '../../assets/shopping-cart.svg';
import { useProducts } from '../../hooks/products';
import Input from '../Input';
import { Container, Nav, HeaderActions } from './styles';

const Header: React.FC = () => {
  const { query, setQuery } = useProducts();

  return (
    <Container>
      <Nav>
        <img src={logo} alt="Logo" />
        <a href="/">Nossas soluções</a>
        <a href="/">Conheça a Jussi</a>
      </Nav>
      <HeaderActions>
        <Input
          placeholder="Buscar"
          value={query}
          onChange={event => setQuery(event.target.value)}
          icon={FiSearch}
        />
        <a href="/">Login</a>
        <img src={minicart} alt="Mini cart" />
      </HeaderActions>
    </Container>
  );
};

export default Header;
