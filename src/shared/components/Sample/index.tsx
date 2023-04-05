import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';

type Props = {
  style?: CSSProperties;
};

const Sample: FC<Props> = ({ style }) => {
  return <Container style={style}>Sample</Container>;
};

export default memo(Sample);

const Container = styled.div`
  color: red;
`;
