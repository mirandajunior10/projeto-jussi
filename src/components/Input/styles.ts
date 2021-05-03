import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 30px;
  width: 100%;
  padding: 4px;
  margin: 0 16px;
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #ee0e7d;

    border-radius: 24px;
    padding: 4px;
    margin-right: 8px;
    &::placeholder {
      color: #ee0e7d;
    }
  }

  svg {
    margin-right: 8px;
  }
`;
