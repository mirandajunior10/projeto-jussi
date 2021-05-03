import React, { useMemo } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import productsBanner from '../../assets/bannerProducts.png';
import brastempLogo from '../../assets/logo-brastemp.svg';
import compraCertaLogo from '../../assets/logo-compra-certa.svg';
import consulLogo from '../../assets/logo-consul.svg';
import facebookLogo from '../../assets/facebook.png';
import instagramLogo from '../../assets/instagram.png';
import linkedInLogo from '../../assets/linkedin.png';
import jussiOffice from '../../assets/image-jussi.png';
import theBarLogo from '../../assets/logo-thebar.svg';
import wppLogo from '../../assets/wppcompany.svg';
import Product from '../../components/Product';
import { useProducts } from '../../hooks/products';

import {
  Banner,
  Container,
  BannerText,
  Slogan,
  PartnersRow,
  Partners,
  OurSolutions,
  OurSolutionsTitle,
  Products,
  Introduction,
  IntroductionText,
  IntroductionImage,
  BuiltWithVTEX,
  VTEXText,
  DoubleSlash,
  Newsletter,
  SignUpButton,
  Footer,
} from './styles';

const Home: React.FC = () => {
  const { products, query } = useProducts();

  const parsedProducts = useMemo(() => {
    if (query) {
      const foundProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase().trim()),
      );
      return foundProducts.length > 4
        ? foundProducts.splice(0, 4)
        : foundProducts;
    }
    return products.splice(0, 4);
  }, [products, query]);
  return (
    <Container>
      <Banner>
        <BannerText>
          <span>&#47;&#47;</span>
          <Slogan>
            <p>Criamos lojas que vendem mais.</p>
            <span>
              A Jüssi é especialista na criação de lojas <br /> usando a
              plataforma VTEX. Precisa criar sua <br />
              loja ou migrar de plataforma?
            </span>
            <button type="button">Veja nossas soluções</button>
          </Slogan>
        </BannerText>
        <img src={productsBanner} alt="Products" />
      </Banner>
      <PartnersRow>
        <span>Nossas principais lojas VTEX </span>
        <FiArrowRight />
        <Partners>
          <img src={brastempLogo} alt="Brastemp" />
          <img src={compraCertaLogo} alt="Compra certa" />
          <img src={consulLogo} alt="Consul" />
          <img src={theBarLogo} alt="The Bar" />
        </Partners>
      </PartnersRow>
      <OurSolutions>
        <OurSolutionsTitle>
          <DoubleSlash>&#47;&#47;</DoubleSlash>
          <p>Nossas soluções</p>
        </OurSolutionsTitle>
        <Products>
          {parsedProducts.map(pokemon => (
            <Product key={pokemon.name} product={pokemon} />
          ))}
        </Products>
      </OurSolutions>
      <Introduction>
        <IntroductionText>
          <h3>
            Olá, somos <br /> a Jussi
          </h3>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <button type="button">Conheça a Jussi</button>
        </IntroductionText>
        <IntroductionImage>
          <img src={jussiOffice} alt="" />
        </IntroductionImage>
      </Introduction>
      <BuiltWithVTEX>
        <VTEXText>
          <p>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </p>
          <div>
            <span>Entre em contato</span>
            <p>comercial@jussi.com.br</p>
          </div>
        </VTEXText>
      </BuiltWithVTEX>
      <Newsletter>
        <DoubleSlash>&#47;&#47;</DoubleSlash>

        <SignUpButton>
          <h3>receba novidades da nossa área de produtos digitais.</h3>
          <div>
            <input placeholder="Digite seu e-mail" type="text" />
            <button type="button">Cadastrar</button>
          </div>
        </SignUpButton>
      </Newsletter>
      <Footer>
        <img src={wppLogo} alt="Wpp logo" />
        <div>
          <img src={facebookLogo} alt="Facebook" />
          <img src={instagramLogo} alt="Instagram" />
          <img src={linkedInLogo} alt="LinkedIn" />
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
