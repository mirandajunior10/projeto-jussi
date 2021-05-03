import React, { InputHTMLAttributes, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import Container from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  icon: Icon,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container style={containerStyle}>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {Icon && <Icon size={20} color="#000" />}
    </Container>
  );
};

export default Input;
