import { styled } from '@stitches/react';
import { lighten } from 'polished';

interface ButtonProps {
  handleClick: () => void;
}

const ButtonStyled = styled('button', {
  padding: '0.5rem',
  backgroundColor: '#AC4040',
  border: 0,
  color: 'white',
  '&:hover': {
    backgroundColor: lighten(0.2, '#AC4040'),
  },
});

export const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
};
