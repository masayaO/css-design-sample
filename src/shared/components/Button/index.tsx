import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';

type Props = {
  text: string;
  showArrow?: boolean;
  isLarge?: boolean;
  style?: CSSProperties;
};

const Button: FC<Props> = ({
  text,
  showArrow = false,
  isLarge = true,
  style,
}) => {
  return (
    <A
      style={style}
      data-show-arrow={showArrow && 'true'}
      data-is-large={isLarge && 'true'}
      href="#"
    >
      {text}
    </A>
  );
};

export default memo(Button);

const A = styled.a`
  display: inline-block;
  width: 300px;
  max-width: 100%;
  padding: 20px 10px;
  background-color: #e25c00;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #e25c00;
  }

  &[data-show-arrow='true'] {
    position: relative;
    padding-right: 2em;
    padding-left: 1.38em;

    &::before {
      content: '';
      margin: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 15px;
      width: 10px; /* くの字を山なりに見た時、左側の長さ */
      height: 10px; /* くの字を山なりに見た時、右側の長さ */
      border-top: 2px solid currentColor; /* くの字を山なりに見た時、左側の太さと色 */
      border-right: 2px solid currentColor; /* くの字を山なりに見た時、右側の太さと色 */
      transform: rotate(45deg);
    }
  }

  &[data-is-large='true'] {
    width: 340px;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 1.375rem;
  }
`;
