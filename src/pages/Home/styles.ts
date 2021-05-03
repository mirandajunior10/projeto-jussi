import styled from 'styled-components';

export const Container = styled.div``;

export const Banner = styled.div`
  display: flex;
  background: #03ffa5;
  padding: 40px 250px 40px 160px;
`;

export const BannerText = styled.div`
  flex: 1;
  display: flex;
  margin-right: 32px;
  margin-top: 40px;
  > span {
    color: #fff;
    font-size: 64px;
  }
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0em;
    text-transform: uppercase;
  }
  span {
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  button {
    background: none;
    display: flex;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    padding: 12px 24px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6px;
  }
`;

export const PartnersRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  padding: 28px;
  span {
    margin-right: 48px;
  }
  svg {
    margin-right: 48px;
  }
`;

export const Partners = styled.div`
  img {
    margin-right: 48px;
  }
`;

export const OurSolutions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 208px;
`;
export const OurSolutionsTitle = styled.div`
  display: flex;
  p {
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
  }
`;

export const DoubleSlash = styled.span`
  color: #03ffa5;
  font-size: 32px;
  font-weight: 700;
`;

export const Products = styled.main`
  display: flex;
  margin-top: 40px;
  overflow: hidden;
  margin-bottom: 56px;
`;
export const Introduction = styled.article`
  display: flex;
  overflow: hidden;
  background: url('./assets/background.png');
  background-size: contain;
  padding: 64px 208px;
`;

export const IntroductionText = styled.div`
  flex: 1;
  max-width: 240px;
  margin-right: 108px;
  h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
  }
  button {
    font-weight: 500;
    margin-top: 24px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6px;
    background: #ffffff;
    padding: 12px 24px;
  }
`;
export const IntroductionImage = styled.div``;

export const BuiltWithVTEX = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ee0e7d;
  padding: 136px 382px;
`;
export const VTEXText = styled.div`
  > p {
    text-transform: uppercase;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    span {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      color: #fff;
    }
    p {
      margin-top: 8px;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      color: #fff;
    }
  }
`;

export const Newsletter = styled.div`
  display: flex;
  padding: 136px 380px;
  background: #000000;
`;

export const SignUpButton = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid #03ffa5;
  h3 {
    text-transform: uppercase;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
  div {
    display: flex;
    input {
      color: #fff;
      flex: 3;
      border: none;
      background: none;
      padding: 8px 0;
      &::placeholder {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
      }
    }
    button {
      text-transform: uppercase;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
      background: none;
      color: #03ffa5;
      border: none;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 28px 208px;
  background-color: #000;
`;
