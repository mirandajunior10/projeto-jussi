import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  & + section {
    margin: 0 10px;
  }
`;

export const Image = styled.div`
  margin: 16px;
  img {
    width: 100px;
    border-radius: 50%;
  }
`;

export const InfoBox = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 16px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    margin-bottom: 16px;
  }
  h4 {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #ee0e7d;
    margin-bottom: 16px;
  }
  ul {
    margin-left: 16px;
    li {
      text-transform: capitalize;
      color: #5b5b5b;
    }
  }
  button {
    width: 200px;
    background: #03ffa5;
    border-radius: 6px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    padding: 16px;
    margin-top: 24px;
  }
`;
