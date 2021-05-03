import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  padding: 0 24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-right: 8px;
  }
  a {
    margin: 0 16px;
    text-decoration: none;
    color: black;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 0 16px;
    color: black;
    &:hover {
      color: black;
    }
  }
  img {
    margin: 0 16px;
  }
`;
