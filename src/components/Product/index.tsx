import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IProductResponse from '../../interfaces/IProductResponse';
import api from '../../services/api';
import { Container, InfoBox, Image } from './styles';

interface ProductProps {
  product: IProductResponse;
}

interface Stat {
  base_stat: 60;
  stat: {
    name: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
  };
}

interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: Stat[];
  types: Type[];
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [features, setFeatures] = useState<Stat[]>([]);

  const fetchProduct = useCallback(async () => {
    const response = await api.get<IPokemon>(product.url);
    setPokemon(response.data);
    setFeatures(response.data.stats);
  }, [product.url]);

  const description = useMemo(() => {
    if (pokemon.types) {
      const parsedDescription = pokemon.types.map(type => {
        return type.type.name;
      });
      return parsedDescription.join(', ');
    }
    return null;
  }, [pokemon]);

  const parsedFeatures = useMemo(() => {
    return features.map(feature => {
      const name = feature.stat.name.split('-').join(' ');
      const { base_stat } = feature;
      return {
        name,
        base_stat,
      };
    });
  }, [features]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Container>
      <Image>
        {pokemon.sprites && (
          <img
            src={
              pokemon.sprites.other['official-artwork'].front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
          />
        )}
      </Image>

      <InfoBox>
        <h3>{pokemon.name}</h3>
        {description && <h4>{description}</h4>}

        <ul>
          {parsedFeatures.map(feature => (
            <li key={feature.name}>
              {feature.name}: {feature.base_stat}
            </li>
          ))}
        </ul>
        <button type="button">Ver solução</button>
      </InfoBox>
    </Container>
  );
};

export default Product;
