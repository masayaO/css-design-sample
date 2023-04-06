import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';

type Props = {
  title: string;
  style?: CSSProperties;
};

const PageTitle: FC<Props> = ({ title, style }) => {
  return (
    <Title style={style}>
      <span>{title}</span>
    </Title>
  );
};

export default memo(PageTitle);

const Title = styled.h1`
  padding: 30px 10px;
  background-color: #e25c00;
  color: #fff;
  font-size: 1.75rem;
  text-align: center;

  span {
    position: relative;
    display: inline-block;
    transform: translateY(-20%);

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      width: 80px;
      height: 1px;
      background-color: currentColor;
      transform: translateX(-50%);
    }
  }
`;
